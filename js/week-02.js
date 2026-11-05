/* ===== WEEK 2 — Future B2: future perfect continuous, future in the past ===== */
COURSE.weeks.push({
  n: 2,
  title: 'Будущее B2 и будущее в прошлом',
  tag: 'will have been doing · was going to · would · be bound / likely to · be to',
  goal: 'Говорить о длительности к моменту будущего (will have been doing), о планах, которые были в прошлом и могли не сбыться (was going to, was about to, would), и о вероятности через be bound to, be likely to, be sure to. Узнавать официальное be to.',
  days: [
    ['Повторение B1', ['will, going to, Present Continuous, will be doing, will have done', 'Present Simple после when / by the time', 'Описать свою следующую неделю пятью формами']],
    ['Future Perfect Continuous', ['will have been + -ing', '<i>By June I’ll have been working here for ten years.</i>', 'Составить 5 «юбилеев»: сколько вы будете делать что-то к дате']],
    ['Будущее в прошлом', ['<i>was going to</i> — собирался (и, возможно, не сделал)', '<i>would</i> — будущее с точки зрения прошлого: <i>I knew she would come.</i>', '<i>was about to</i> — вот-вот собирался']],
    ['Вероятность', ['<i>be bound to</i> — наверняка; <i>be likely / unlikely to</i> — вероятно', '<i>be sure / certain to</i>', 'Сделать 8 прогнозов о технологиях и обществе']],
    ['Официальное be to', ['<i>The President is to visit Japan.</i> — новости, планы', '<i>You are to report to reception.</i> — инструкция', 'Найти 3 примера в заголовках BBC News']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать эссе (140–190 слов): <i>Will cities be better places to live in 2050?</i>']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: будущее «отсюда» и будущее «оттуда»', 'Шпаргалка: 10 форм будущего', 'Список пробелов → план недели 3 (модальные B2)']],
  ],
  progress: ['Future Perfect Continuous', 'Будущее в прошлом', 'Вероятность', 'Выбор формы'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Будущее можно смотреть <strong>из сегодняшнего дня</strong> (will, going to) и <strong>из прошлого</strong> (would, was going to) — как будто вы вспоминаете, что тогда казалось будущим.</p>
    ${tl([['then: I was going to call', 'план в прошлом'], ['but I forgot', 'не сбылось', 1], ['now', 'сейчас']])}
    ${ex('I was going to call you, but I forgot.', 'Я собирался тебе позвонить, но забыл.')}
    ${ex('By next year, I’ll have been living here for a decade.', 'К следующему году я буду жить здесь уже десять лет.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Будущее в прошлом — это <strong>старый ежедневник</strong>. Вы открываете его и читаете: «в пятницу я <em>собирался</em> в кино». Сбылось или нет — неизвестно из самой фразы, но обычно <i>was going to</i> намекает, что планы поменялись.</p>
    ${note('<strong>Правило-проверка:</strong> «собирался, но…» → was going to. «Знал, что будет» → would. «Как раз собирался, когда…» → was about to.')}`,
  forms: `
    <h3>Future Perfect Continuous</h3>
    ${tbl(['', 'Пример'], [
      ['+', 'By 6 pm I’ll have been driving for ten hours.'],
      ['−', 'She <em>won’t have been</em> waiting long.'],
      ['?', 'How long <em>will</em> you <em>have been</em> studying by then?']])}
    <h3>Будущее в прошлом</h3>
    ${tbl(['Сейчас', 'Из прошлого', 'Пример'], [
      ['will', 'would', 'She said she <em>would</em> help.'],
      ['am going to', 'was going to', 'We <em>were going to</em> move, but…'],
      ['am about to', 'was about to', 'I <em>was about to</em> leave when he called.'],
      ['am meeting', 'was meeting', 'I couldn’t come — I <em>was meeting</em> a client.']])}
    <h3>Вероятность</h3>
    ${tbl(['Конструкция', 'Уверенность', 'Пример'], [
      ['be bound to', 'почти точно', 'It’s bound to rain this weekend.'],
      ['be sure / certain to', 'точно', 'She’s sure to win.'],
      ['be likely to', 'вероятно', 'Prices are likely to rise.'],
      ['be unlikely to', 'маловероятно', 'He’s unlikely to come.']])}`,
  usage: `
    <h3>Was going to — несбывшиеся планы</h3>
    ${ul(['<i>I was going to buy a car, but prices went up.</i>', '<i>We were going to have a picnic, but it rained.</i>', 'Вежливое оправдание: <i>I was just going to call you!</i>'])}
    <h3>Would — будущее глазами прошлого</h3>
    ${ex('In 1990 nobody knew that the internet would change everything.', 'В 1990 году никто не знал, что интернет всё изменит.')}
    <h3>Be to — официально</h3>
    ${ul(['Новости: <i>The Prime Minister is to announce new measures.</i>', 'Распоряжения: <i>All visitors are to sign in at reception.</i>', 'В условиях: <i>If we are to succeed, we must work together.</i> — если мы хотим преуспеть'])}
    ${note('<strong>Внимание:</strong> <i>be likely to</i> относится к подлежащему: <i>He is likely to be late.</i> Можно и безлично: <i>It is likely that he will be late.</i>')}`,
  compare: `
    ${tbl(['', 'will have done', 'will have been doing'], [
      ['Фокус', 'результат к сроку', 'длительность к сроку'],
      ['Пример', 'By May I’ll have written 3 chapters.', 'By May I’ll have been writing for a year.'],
      ['Вопрос', 'How many…?', 'How long…?']])}
    <h3>Will или would</h3>
    ${ex('I think she will come.', 'Думаю, она придёт (сейчас так думаю).')}
    ${ex('I thought she would come.', 'Я думал, что она придёт (тогда так думал).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> «Я знал, что он опоздает» → <i>I knew he will be late</i>. Будущее из прошлого → <i>I knew he <em>would</em> be late.</i>')}`,
  dialog: [
    ['P', 'Weren’t you going to start a new job this month?', 'Разве ты не собиралась выйти на новую работу в этом месяце?'],
    ['N', 'I was going to, but they postponed the start date. It’s likely to be in March now.', 'Собиралась, но они перенесли дату. Теперь, скорее всего, в марте.'],
    ['P', 'That’s annoying. I knew they would change something.', 'Обидно. Я знал, что они что-нибудь поменяют.'],
    ['N', 'Well, by March I’ll have been working at my old company for six years.', 'Ну, к марту я буду работать в старой компании уже шесть лет.'],
    ['P', 'Six years! You’re bound to miss your colleagues.', 'Шесть лет! Ты наверняка будешь скучать по коллегам.'],
    ['N', 'Definitely. I was about to hand in my notice when my boss offered me a pay rise!', 'Конечно. Я как раз собиралась подать заявление, когда начальник предложил прибавку!'],
    ['P', 'And you still said no?', 'И ты всё равно отказалась?'],
    ['N', 'Yes. If I’m to grow professionally, I need a change. The new company is to open an office in Lisbon.', 'Да. Если я хочу расти профессионально, мне нужны перемены. Новая компания собирается открыть офис в Лиссабоне.'],
  ],
  test: [
    { q: 'By June I ___ here for ten years.', o: ['will work', 'will have been working', 'am working', 'will be work'], a: 1, c: 0, e: 'Длительность к моменту будущего → will have been + -ing.' },
    { q: 'I ___ call you, but I forgot.', o: ['will', 'am going to', 'was going to', 'would have'], a: 2, c: 1, e: 'Несбывшийся план → was going to.' },
    { q: 'In 1990 nobody knew the internet ___ everything.', o: ['will change', 'would change', 'changes', 'is changing'], a: 1, c: 1, e: 'Будущее с точки зрения прошлого → would.' },
    { q: 'I ___ leave when the phone rang.', o: ['was about to', 'am about to', 'will be about', 'about to'], a: 0, c: 1, e: 'Вот-вот собирался → was about to.' },
    { q: 'Take an umbrella. It’s ___ rain — the sky is black.', o: ['likely', 'unlikely to', 'about', 'bound to'], a: 3, c: 2, e: 'Почти точно → be bound to.' },
    { q: 'Prices are ___ rise next year, according to experts.', o: ['likely to', 'about', 'bound', 'due'], a: 0, c: 2, e: 'Вероятно → be likely to + V.' },
    { q: 'He’s very busy, so he’s ___ come to the party.', o: ['bound to', 'sure to', 'unlikely to', 'about to'], a: 2, c: 2, e: 'Маловероятно → be unlikely to.' },
    { q: 'The Prime Minister ___ visit Japan next month. (новости)', o: ['is to', 'is about', 'will to', 'is going'], a: 0, c: 3, e: 'Официальный план в новостях → be to.' },
    { q: 'By May I ___ three chapters of my book.', o: ['will have been writing', 'will be writing', 'will write', 'will have written'], a: 3, c: 3, e: 'Результат к сроку (three) → will have written.' },
    { q: 'I thought she ___ late, and she was.', o: ['will be', 'is', 'would be', 'has been'], a: 2, c: 3, e: 'Мысль в прошлом о будущем → would be.' },
  ],
  feynman: {
    task: 'Объясните будущее «отсюда» (will, going to) и «оттуда» (would, was going to) на примере «старого ежедневника» так, чтобы понял 10-летний ребёнок.',
    prompts: ['Что обычно значит <i>I was going to…</i>?', 'Чем <i>be bound to</i> отличается от <i>be likely to</i>?', 'Где встречается официальное <i>be to</i>?', 'Расскажите о трёх своих несбывшихся планах.'],
  },
});
