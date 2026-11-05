// Сборка страниц из данных недель и интерактив: план, тест, диалог, дневник Фейнмана, тема.
(function () {
  const W = COURSE.weeks;
  const TABS = [
    ['plan', '📅 План'], ['theory', '📖 Теория'], ['forms', '⚙️ Формы'], ['usage', '💡 Употребление'],
    ['compare', '⚖️ Сравнение'], ['dialog', '💬 Диалог'], ['test', '🎯 Тест'], ['feynman', '✍️ Фейнман'],
  ];
  const DAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  // Цель теста недели: от этого процента неделя отмечается точкой.
  const GOAL = 80;
  // Что озвучивается по нажатию (если внутри английский текст без кириллицы).
  const SAY_SEL = ['.ex b', '.content i', '.content em', '.content b', 'td', '.timeline b', '.bub .en', '.q p', '.opts label'];

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  let week = Math.min(Math.max(store.get('week', 0), 0), W.length - 1);
  let tab = store.get('tab', 'plan');
  if (!TABS.some((t) => t[0] === tab)) tab = 'plan';

  function renderWeeks() {
    $('#weeks').innerHTML = W.map((w, i) => {
      const sc = store.get('score:' + i, null);
      return `<button type="button" class="${i === week ? 'on' : ''}" data-w="${i}" title="${esc(w.title)}">Нед.${i + 1}${sc && sc.pct >= GOAL ? '<span class="dot"></span>' : ''}</button>`;
    }).join('');
    const on = $('#weeks .on');
    if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  function renderTabs() {
    $('#tabs').innerHTML = TABS.map(([k, l]) => `<button type="button" class="${k === tab ? 'on' : ''}" data-t="${k}">${l}</button>`).join('');
  }

  const header = (w) => `<h2 class="week-title">Неделя ${week + 1}. ${w.title}</h2><div class="week-tag">${w.tag}</div>`;

  function progressHTML(w) {
    const sc = store.get('score:' + week, null);
    return `<div class="card"><div class="label">Прогресс</div>
      ${w.progress.map((p, i) => {
        const v = sc && sc.cat && sc.cat[i] != null ? sc.cat[i] : null;
        return `<div class="prog-row"><div>${p}</div><div class="bar"><i style="width:${v == null ? 0 : v}%"></i></div><div class="v">${v == null ? '–' : v + '%'}</div></div>`;
      }).join('')}
      <div class="hint">${sc ? `Лучший результат теста: ${sc.pct}% (${sc.right}/${sc.total})` : 'Обновляется после теста (раздел 🎯)'}</div></div>`;
  }

  function renderPlan(w) {
    const checks = store.get('plan:' + week, {});
    return `${header(w)}
    <div class="card goal"><div class="label">Цель недели</div><h3>Что вы умеете после недели ${week + 1} B2</h3><p>${w.goal}</p></div>
    <div class="card"><div class="label">Программа по дням</div>
      ${w.days.map((d, di) => `<div class="day"><div class="d">${DAYS[di]}</div><div><h4>${d[0]}</h4><ul>
        ${d[1].map((it, ii) => {
          const id = di + '-' + ii;
          const on = !!checks[id];
          return `<li class="${on ? 'done' : ''}"><input type="checkbox" data-c="${id}" ${on ? 'checked' : ''} aria-label="${esc(it.replace(/<[^>]+>/g, ''))}"><span>${it}</span></li>`;
        }).join('')}
      </ul></div></div>`).join('')}
    </div>
    ${progressHTML(w)}`;
  }

  const renderContent = (w, key) => `${header(w)}<div class="card content">${w[key]}</div>`;

  function renderDialog(w) {
    const sides = {};
    return `${header(w)}<div class="card">
      <div class="label">Диалог — разыграйте обе роли · нажмите на реплику 🔊</div>
      <div class="dlg" id="dlg">${w.dialog.map(([who, en, ru]) => {
        if (!(who in sides)) sides[who] = Object.keys(sides).length;
        return `<div class="line${sides[who] % 2 ? ' r' : ''}"><div class="who">${who}</div><div class="bub"><div class="en">${en}</div><div class="ru">${ru}</div></div></div>`;
      }).join('')}</div>
      <div class="btns"><button class="btn" type="button" id="toggleRu">Показать перевод</button>${'speechSynthesis' in window ? '<button class="btn" type="button" id="speakAll">🔊 Озвучить диалог</button>' : ''}</div>
    </div>`;
  }

  function renderTest(w) {
    const sc = store.get('score:' + week, null);
    return `${header(w)}<div class="card" id="test">
      <div class="label">Тест недели · цель ${GOAL}%+</div>
      ${w.test.map((t, qi) => `<div class="q" data-q="${qi}"><p>${qi + 1}. ${t.q}</p><div class="opts">
        ${t.o.map((o, oi) => `<label><input type="radio" name="q${qi}" value="${oi}"> ${o}</label>`).join('')}
      </div><div class="exp">${t.e}</div></div>`).join('')}
      <div class="btns"><button class="btn primary" type="button" id="check">Проверить</button><button class="btn" type="button" id="reset">Сбросить</button></div>
      <div class="score" id="score">${sc ? `Лучший результат сохранён: ${sc.pct}%` : ''}</div>
    </div>`;
  }

  function renderFeynman(w) {
    const txt = store.get('feyn:' + week, '');
    return `${header(w)}
    <div class="card"><div class="label">Метод Фейнмана — 4 шага</div>
      <ol class="steps">
        <li><div><b>Выберите тему:</b> ${w.feynman.task}</div></li>
        <li><div><b>Объясните простыми словами</b> — письменно ниже или голосом (2–3 мин). Без терминов, с примером из жизни.</div></li>
        <li><div><b>Найдите пробелы:</b> где вы запнулись? Вернитесь к «Теории» и «Формам».</div></li>
        <li><div><b>Упростите и используйте аналогию.</b> Перепишите объяснение короче.</div></li>
      </ol>
    </div>
    <div class="card content"><div class="label">Вопросы для самопроверки</div>${ul(w.feynman.prompts)}</div>
    <div class="card"><div class="label">Моё объяснение</div>
      <textarea id="feyn" placeholder="Объясните тему так, будто рассказываете ребёнку…">${esc(txt)}</textarea>
      <div class="hint">Сохраняется автоматически в этом браузере.</div>
    </div>`;
  }

  function markSpeakable() {
    document.querySelectorAll(SAY_SEL.map((s) => '#main ' + s).join(', ')).forEach((el) => {
      if (cleanSpeech(el.textContent)) el.classList.add('say');
    });
  }

  function render() {
    const w = W[week];
    renderWeeks();
    renderTabs();
    let html;
    switch (tab) {
      case 'plan': html = renderPlan(w); break;
      case 'dialog': html = renderDialog(w); break;
      case 'test': html = renderTest(w); break;
      case 'feynman': html = renderFeynman(w); break;
      default: html = renderContent(w, tab);
    }
    $('#main').innerHTML = html;
    markSpeakable();
  }

  function checkTest() {
    const w = W[week];
    let right = 0;
    const catRight = w.progress.map(() => 0);
    const catTotal = w.progress.map(() => 0);
    w.test.forEach((t, qi) => {
      const box = document.querySelector(`[data-q="${qi}"]`);
      const sel = box.querySelector('input:checked');
      box.classList.add('checked');
      box.querySelectorAll('label').forEach((l, oi) => {
        l.classList.remove('right', 'wrong');
        if (oi === t.a) l.classList.add('right');
        else if (sel && +sel.value === oi) l.classList.add('wrong');
      });
      catTotal[t.c]++;
      if (sel && +sel.value === t.a) { right++; catRight[t.c]++; }
    });
    const pct = Math.round(right / w.test.length * 100);
    const cat = catTotal.map((n, i) => (n ? Math.round(catRight[i] / n * 100) : null));
    const prev = store.get('score:' + week, null);
    if (!prev || pct >= prev.pct) store.set('score:' + week, { pct, right, total: w.test.length, cat });
    $('#score').innerHTML = `Результат: ${right}/${w.test.length} — ${pct}% ${pct >= GOAL ? '✅ Цель достигнута!' : `· цель ${GOAL}% — повторите разделы и попробуйте ещё раз`}`;
    renderWeeks();
  }

  // Реплики диалога по очереди; любое другое нажатие на текст прерывает чтение.
  function speakDialog(i) {
    const lines = document.querySelectorAll('#dlg .bub .en');
    if (i >= lines.length) return;
    speak(cleanSpeech(lines[i].textContent), lines[i], () => speakDialog(i + 1));
  }

  // ── СОБЫТИЯ ──
  document.addEventListener('click', (e) => {
    const sayEl = e.target.closest('.say');
    if (sayEl && e.target.tagName !== 'INPUT') speak(cleanSpeech(sayEl.textContent), sayEl);

    const wb = e.target.closest('[data-w]');
    if (wb) { week = +wb.dataset.w; store.set('week', week); render(); window.scrollTo({ top: 0 }); return; }
    const tb = e.target.closest('[data-t]');
    if (tb) { tab = tb.dataset.t; store.set('tab', tab); render(); return; }

    if (e.target.id === 'toggleRu') {
      const d = $('#dlg');
      d.classList.toggle('show-ru');
      e.target.textContent = d.classList.contains('show-ru') ? 'Скрыть перевод' : 'Показать перевод';
    }
    if (e.target.id === 'speakAll') speakDialog(0);
    if (e.target.id === 'check') checkTest();
    if (e.target.id === 'reset') render();
  });

  document.addEventListener('change', (e) => {
    if (e.target.dataset && e.target.dataset.c) {
      const checks = store.get('plan:' + week, {});
      checks[e.target.dataset.c] = e.target.checked;
      store.set('plan:' + week, checks);
      e.target.closest('li').classList.toggle('done', e.target.checked);
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'feyn') store.set('feyn:' + week, e.target.value);
  });

  // ── ТЕМА ──
  const saved = store.get('theme', null);
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  $('#themeBtn').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store.set('theme', next);
  });

  render();
})();
