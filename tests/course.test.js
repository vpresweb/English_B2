// Проверка данных курса: структура недель, тесты, диалоги и разметка.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

// Помощники разметки из core.js нужны файлам недель уже при загрузке.
const context = { window: {} };
context.window = context;
vm.createContext(context);
const core = read('js/core.js');
vm.runInContext(core.slice(0, core.search(/\(function \(\) \{\r?\n {2}\/\/ ── ОЗВУЧКА/)), context, { filename: 'core.js' });
const weekFiles = readdirSync(new URL('js/', root)).filter((f) => /^week-\d\d\.js$/.test(f)).sort();
for (const file of weekFiles) vm.runInContext(read(`js/${file}`), context, { filename: file });
// Копия через JSON: массивы из другого realm vm не проходят deepStrictEqual.
const weeks = JSON.parse(JSON.stringify(context.COURSE.weeks));

const CONTENT_TABS = ['theory', 'forms', 'usage', 'compare'];
const CYR = /[А-Яа-яЁё]/;

test('12 недель по порядку', () => {
  assert.equal(weekFiles.length, 12);
  assert.deepEqual(weeks.map((w) => w.n), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('index.html подключает core.js, все недели и app.js по порядку', () => {
  const html = read('index.html');
  for (const file of weekFiles) assert.ok(html.includes(`src="js/${file}"`), `нет ${file}`);
  assert.ok(html.indexOf('js/core.js') < html.indexOf('js/week-01.js'));
  assert.ok(html.indexOf('js/week-12.js') < html.indexOf('js/app.js'));
});

test('у каждой недели заполнены все разделы', () => {
  for (const w of weeks) {
    const where = `неделя ${w.n}`;
    for (const key of ['title', 'tag', 'goal', ...CONTENT_TABS]) assert.ok(typeof w[key] === 'string' && w[key].trim(), `${where}: ${key}`);
    assert.equal(w.days.length, 7, `${where}: дней в плане`);
    for (const [title, tasks] of w.days) assert.ok(title && tasks.length >= 2, `${where}: день «${title}»`);
    assert.equal(w.progress.length, 4, `${where}: тем прогресса`);
    assert.ok(w.dialog.length >= 6, `${where}: реплик в диалоге`);
    assert.ok(w.feynman.task && w.feynman.prompts.length >= 3, `${where}: задание Фейнмана`);
  }
});

test('тест недели: 10 вопросов, 4 разных варианта, верный ответ и тема', () => {
  for (const w of weeks) {
    assert.equal(w.test.length, 10, `неделя ${w.n}: вопросов`);
    w.test.forEach((q, i) => {
      const where = `неделя ${w.n}, вопрос ${i + 1}`;
      assert.ok(q.q && q.e, `${where}: нет текста или пояснения`);
      assert.equal(q.o.length, 4, `${where}: вариантов`);
      assert.equal(new Set(q.o).size, 4, `${where}: повтор варианта`);
      assert.ok(Number.isInteger(q.a) && q.a >= 0 && q.a < 4, `${where}: ответ`);
      assert.ok(Number.isInteger(q.c) && q.c >= 0 && q.c < w.progress.length, `${where}: тема прогресса`);
    });
    // Каждая тема прогресса должна проверяться хотя бы одним вопросом.
    const covered = new Set(w.test.map((q) => q.c));
    assert.equal(covered.size, w.progress.length, `неделя ${w.n}: темы без вопросов`);
  }
});

test('правильные ответы распределены по вариантам', () => {
  const counts = [0, 0, 0, 0];
  for (const w of weeks) for (const q of w.test) counts[q.a]++;
  const total = counts.reduce((a, c) => a + c, 0);
  // Ни один вариант не должен быть правильным подавляюще часто — иначе тест угадывается.
  for (const c of counts) assert.ok(c / total > 0.15 && c / total < 0.35, `перекос ответов: ${counts}`);
});

test('реплики диалогов: английский текст без кириллицы и перевод', () => {
  for (const w of weeks) {
    for (const [who, en, ru] of w.dialog) {
      const where = `неделя ${w.n}, «${en}»`;
      assert.ok(who && en && ru, where);
      assert.doesNotMatch(en, CYR, `${where}: кириллица`);
      assert.match(ru, CYR, `${where}: нет перевода`);
    }
  }
});

test('теги в разметке парные', () => {
  for (const w of weeks) {
    const parts = [...CONTENT_TABS.map((k) => w[k]), w.goal, ...w.days.flat(2), w.feynman.task, ...w.feynman.prompts, ...w.test.flatMap((q) => [q.q, q.e])];
    for (const html of parts) {
      for (const tag of ['b', 'i', 'em', 'strong', 'p', 'ul', 'li', 'h3', 'div', 'table', 'span']) {
        const open = (html.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
        const close = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;
        assert.equal(open, close, `неделя ${w.n}: <${tag}> в «${html.trim().slice(0, 60)}…»`);
      }
    }
  }
});

test('ни один раздел не содержит undefined', () => {
  for (const w of weeks) for (const k of CONTENT_TABS) assert.ok(!w[k].includes('undefined'), `неделя ${w.n}: ${k}`);
});
