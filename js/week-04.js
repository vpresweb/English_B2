/* ===== WEEK 4 — Mixed conditionals, alternatives to if ===== */
COURSE.weeks.push({
  n: 4,
  title: 'Смешанные условия и альтернативы if',
  tag: 'If I had…, I would be… · provided, as long as, in case, otherwise · Had I known…',
  goal: 'Связывать нереальное прошлое с настоящим и наоборот (mixed conditionals), заменять if точными союзами (unless, provided, as long as, even if, in case, otherwise, supposing) и узнавать формальную инверсию в условиях.',
  days: [
    ['Повторение B1', ['Zero, first, second, third conditional', 'wish + Past / Past Perfect', 'Составить по 2 предложения каждого типа о себе']],
    ['Смешанные условия', ['Прошлое → настоящее: <i>If I had studied medicine, I would be a doctor now.</i>', 'Настоящее → прошлое: <i>If I weren’t so shy, I would have spoken to her.</i>', 'Написать 5 смешанных условий о своей биографии']],
    ['Provided, as long as, unless', ['<i>provided / providing / as long as</i> — при условии, что', '<i>unless</i> — если не; <i>even if</i> — даже если', 'Составить договор с соседом по квартире (6 условий)']],
    ['In case и otherwise', ['<i>in case</i> — на случай, если (мера заранее)', '<i>otherwise / or else</i> — иначе', '<i>supposing / what if</i> — а что, если']],
    ['Инверсия', ['<i>Had I known…</i> = If I had known…', '<i>Should you need help…</i> = If you need…', '<i>Were I in your position…</i> = If I were…']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать эссе (140–190 слов): <i>A decision I would make differently</i>']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: как «склеить» два типа условий', 'Карта союзов: if, unless, provided, in case, even if', 'Список пробелов → план недели 5 (нереальное прошлое: wish, I’d rather, it’s time)']],
  ],
  progress: ['Смешанные условия', 'Provided / unless / even if', 'In case / otherwise', 'Инверсия'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Смешанное условие — это <strong>«склейка» двух времён</strong>: условие из одного времени, результат из другого. Чаще всего — другое прошлое и его последствие сейчас.</p>
    ${tl([['If I had taken that job', 'прошлое (не взял)'], ['I would be rich now', 'настоящее (не богат)', 1]])}
    ${ex('If I had taken that job, I would be living in New York now.', 'Если бы я тогда согласился на ту работу, сейчас жил бы в Нью-Йорке.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте <strong>два вагона</strong>: вагон условия и вагон результата. В обычных условиях оба из одного поезда (оба про прошлое или оба про настоящее). В смешанных вагоны сцеплены из разных поездов: «вагон прошлого» + «вагон настоящего».</p>
    ${note('<strong>Правило-проверка:</strong> посмотрите на маркеры времени в каждой части. <i>then / ten years ago</i> в условии + <i>now / today</i> в результате → смешанное условие.')}
    <h3>Не только if</h3>
    <p>На B2 вместо <i>if</i> часто ставят более точный союз: <i>provided</i> (при условии), <i>in case</i> (на всякий случай), <i>even if</i> (даже если), <i>otherwise</i> (иначе).</p>`,
  forms: `
    <h3>Два вида смешанных условий</h3>
    ${tbl(['Тип', 'Условие', 'Результат', 'Пример'], [
      ['прошлое → сейчас', 'If + had + V3', 'would + V', 'If I’d saved money, I’d have a car now.'],
      ['сейчас → прошлое', 'If + Past Simple', 'would have + V3', 'If I spoke French, I would have got the job.']])}
    <h3>Альтернативы if</h3>
    ${tbl(['Союз', 'Значение', 'Пример'], [
      ['unless', 'если не', 'I won’t go unless you come too.'],
      ['provided / providing (that)', 'при условии, что', 'You can borrow it provided you return it.'],
      ['as long as', 'пока / при условии', 'I’ll help as long as you pay for lunch.'],
      ['even if', 'даже если', 'I’ll go even if it rains.'],
      ['in case', 'на случай, если', 'Take a coat in case it gets cold.'],
      ['otherwise / or else', 'иначе', 'Hurry, otherwise we’ll be late.'],
      ['supposing / what if', 'а что, если', 'Supposing you lost your job, what would you do?']])}
    <h3>Инверсия (формально)</h3>
    ${tbl(['Обычно', 'Инверсия'], [
      ['If I had known…', '<em>Had I known</em>, I would have helped.'],
      ['If you should need anything…', '<em>Should you need</em> anything, call me.'],
      ['If I were you…', '<em>Were I</em> in your position, I would resign.']])}`,
  usage: `
    <h3>In case — не то же, что if</h3>
    ${ex('Take an umbrella in case it rains.', 'Возьми зонт на случай дождя (бери сейчас, при любой погоде).')}
    ${ex('Take an umbrella if it rains.', 'Возьми зонт, если пойдёт дождь (бери только при дожде).')}
    <h3>Even if и even though</h3>
    ${ex('I’ll finish the race even if I have to walk.', 'Я финиширую, даже если придётся идти пешком (гипотеза).')}
    ${ex('I finished the race even though my leg hurt.', 'Я финишировал, хотя у меня болела нога (факт).')}
    <h3>Инверсия в официальных текстах</h3>
    ${ul(['<i>Should you have any questions, please contact us.</i> — письма компаний', '<i>Had the police arrived earlier, the thief would have been caught.</i> — новости, рассказы', 'На экзамене B2 First инверсия встречается в Use of English Part 4'])}`,
  compare: `
    ${tbl(['', 'Third', 'Mixed (прошлое → сейчас)'], [
      ['Схема', 'If + had V3, would have V3', 'If + had V3, would + V'],
      ['Пример', 'If I’d gone to bed early, I wouldn’t have been tired yesterday.', 'If I’d gone to bed early, I wouldn’t be tired now.'],
      ['Результат', 'в прошлом', 'сейчас']])}
    <h3>Unless и if not</h3>
    ${ex('Unless you hurry, you’ll miss the train.', 'Если не поторопишься, опоздаешь на поезд.')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>unless you don’t hurry</i> — двойное отрицание. <i>in case it will rain</i> → <i>in case it rains</i>. <i>If I would have studied, I would be…</i> → <i>If I had studied…</i>')}`,
  dialog: [
    ['M', 'Do you ever regret not going to university?', 'Ты когда-нибудь жалеешь, что не пошёл в университет?'],
    ['J', 'Sometimes. If I had gone, I’d probably have a better job now.', 'Иногда. Если бы пошёл, сейчас у меня, наверное, была бы работа получше.'],
    ['M', 'But if you weren’t so good with your hands, you wouldn’t have started your own business.', 'Но если бы ты не был таким мастером на все руки, ты бы не открыл своё дело.'],
    ['J', 'True. Anyway, I’m thinking of doing an online degree, provided I can find the time.', 'Правда. В любом случае думаю получить онлайн-диплом, если найду время.'],
    ['M', 'You should. I’ll help you with the essays, as long as you fix my kitchen!', 'Стоит. Я помогу тебе с эссе, при условии что ты починишь мне кухню!'],
    ['J', 'Deal. I’ll bring my tools on Saturday, in case there’s something else to repair.', 'Договорились. Возьму инструменты в субботу, на случай если ещё что-то надо починить.'],
    ['M', 'Great. Come early, otherwise we won’t finish before dinner.', 'Отлично. Приходи пораньше, иначе не закончим до ужина.'],
    ['J', 'Should anything change, I’ll text you. Had I known about the leak, I’d have come today!', 'Если что-то изменится, напишу. Знал бы я про протечку — пришёл бы сегодня!'],
  ],
  test: [
    { q: 'If I had studied medicine, I ___ a doctor now.', o: ['would have been', 'will be', 'would be', 'had been'], a: 2, c: 0, e: 'Прошлое → настоящее: would + V.' },
    { q: 'If I spoke French, I ___ the job last year.', o: ['would get', 'would have got', 'will get', 'got'], a: 1, c: 0, e: 'Настоящее (не говорю) → прошлое: would have + V3.' },
    { q: 'You can borrow my car ___ you bring it back by six.', o: ['unless', 'in case', 'otherwise', 'provided'], a: 3, c: 1, e: 'При условии, что → provided.' },
    { q: 'I won’t go ___ you come with me.', o: ['unless', 'in case', 'provided', 'even'], a: 0, c: 1, e: 'Если не → unless.' },
    { q: 'I’ll finish the race ___ I have to walk.', o: ['in case', 'even if', 'unless', 'as long'], a: 1, c: 1, e: 'Даже если → even if.' },
    { q: 'Take a jacket ___ it gets cold later.', o: ['if not', 'unless', 'in case', 'otherwise'], a: 2, c: 2, e: 'Мера заранее → in case + Present.' },
    { q: 'Hurry up, ___ we’ll miss the start.', o: ['unless', 'otherwise', 'in case', 'provided'], a: 1, c: 2, e: 'Иначе → otherwise / or else.' },
    { q: '___ I known about the problem, I would have helped.', o: ['If', 'Should', 'Were', 'Had'], a: 3, c: 3, e: 'Инверсия third conditional: Had I known…' },
    { q: '___ you need any help, please call us.', o: ['Should', 'Had', 'Were', 'Would'], a: 0, c: 3, e: 'Формальная инверсия: Should you need…' },
    { q: '___ I in your position, I would resign.', o: ['Had', 'Should', 'Were', 'If'], a: 2, c: 3, e: 'Инверсия second conditional: Were I…' },
  ],
  feynman: {
    task: 'Объясните смешанные условия как «вагоны из разных поездов» и разницу между if и in case так, чтобы понял 10-летний ребёнок.',
    prompts: ['Как сказать «если бы я тогда выучил английский, сейчас бы жил в Лондоне»?', 'Почему <i>unless you don’t…</i> — ошибка?', 'Чем even if отличается от even though?', 'Перепишите 3 условия с if в формальной инверсии.'],
  },
});
