/* ===== WEEK 3 — Modals B2 ===== */
COURSE.weeks.push({
  n: 3,
  title: 'Модальные B2: обязанность, ожидание, догадки',
  tag: 'needn’t have / didn’t need to · be supposed to · had better · must have been doing',
  goal: 'Тонко выражать необходимость и её отсутствие в прошлом, ожидания и правила (be supposed to, be allowed to), сильный совет (had better), а также делать догадки о процессах в прошлом (must have been doing, can’t have been).',
  days: [
    ['Повторение B1', ['must / have to / don’t have to / mustn’t', 'must / might / can’t + have + V3', 'should have / could have для сожалений']],
    ['Необходимость в прошлом', ['<i>needn’t have done</i> — сделал зря', '<i>didn’t need to do</i> — не было нужды (обычно не делал)', 'Рассказать о 4 вещах, которые вы сделали зря']],
    ['Be supposed to', ['ожидание, правило: <i>You’re supposed to wear a tie.</i>', 'не сбывшееся ожидание: <i>The train was supposed to arrive at 6.</i>', 'Составить 6 «неписаных правил» вашей страны']],
    ['Be allowed to, had better, ought to', ['разрешение во всех временах: <i>We weren’t allowed to…</i>', '<i>had better</i> — «лучше бы», с предупреждением', '<i>ought to</i> = should, чуть формальнее']],
    ['Догадки о процессах', ['<i>must have been working</i>, <i>might have been sleeping</i>', '<i>can’t / couldn’t have been</i>', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать письмо (140–190 слов) с советами новичку на вашей работе', 'Использовать минимум 8 разных модальных форм']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: needn’t have vs didn’t need to', 'Таблица модальных глаголов по смыслам', 'Список пробелов → план недели 4 (смешанные условия)']],
  ],
  progress: ['Необходимость', 'Правила и ожидания', 'Had better / ought to', 'Догадки B2'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>На B2 модальные глаголы передают <strong>оттенки</strong>: сделал зря или не делал вовсе, правило или ожидание, мягкий совет или предупреждение.</p>
    ${ex('I needn’t have taken a taxi — the station was close.', 'Зря я взял такси — вокзал был рядом (взял, но было не нужно).')}
    ${ex('I didn’t need to take a taxi, so I walked.', 'Мне не нужно было брать такси, так что я пошёл пешком (не брал).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Модальный глагол — <strong>эмоция говорящего</strong>, приклеенная к действию. <i>You should go</i> — дружеский совет. <i>You’d better go</i> — «а не то будут проблемы». <i>You’re supposed to go</i> — «так принято / так ожидают». Само действие одно, отношение разное.</p>
    ${note('<strong>Правило-проверка для прошлого:</strong> действие произошло и было лишним → <i>needn’t have + V3</i>. Действия не было, потому что не требовалось → <i>didn’t need to + V</i>.')}`,
  forms: `
    <h3>Модальные по смыслам</h3>
    ${tbl(['Смысл', 'Настоящее', 'Прошлое'], [
      ['обязанность', 'must / have to', 'had to'],
      ['нет необходимости', 'don’t have to / needn’t', 'didn’t need to / <em>needn’t have done</em>'],
      ['запрет', 'mustn’t / aren’t allowed to', 'weren’t allowed to / couldn’t'],
      ['ожидание, правило', 'be supposed to', 'was supposed to (но не…)'],
      ['совет', 'should / ought to', 'should have / ought to have done'],
      ['сильный совет', 'had better (not)', '—']])}
    <h3>Догадки о процессах</h3>
    ${tbl(['Форма', 'Пример', 'Рус.'], [
      ['must have been + -ing', 'She must have been sleeping.', 'Она, наверное, спала.'],
      ['might have been + -ing', 'He might have been joking.', 'Может, он шутил.'],
      ['can’t have been + -ing', 'They can’t have been listening.', 'Не может быть, что они слушали.']])}
    ${note('<strong>Had better:</strong> после — инфинитив без to: <i>You’d better hurry.</i> Отрицание: <i>You’d better not be late.</i> Хотя форма «had», речь о настоящем / будущем.')}`,
  usage: `
    <h3>Be supposed to</h3>
    ${ul(['Правило: <i>You’re supposed to take your shoes off here.</i>', 'Ожидание, которое не сбылось: <i>He was supposed to call me yesterday.</i>', 'Репутация: <i>This restaurant is supposed to be excellent.</i> — говорят, что…'])}
    <h3>Had better — с предупреждением</h3>
    ${ex('You’d better leave now, or you’ll miss the train.', 'Тебе лучше выйти сейчас, а то опоздаешь на поезд.')}
    <h3>Разрешение в прошлом</h3>
    ${ex('We were allowed to stay up late on Fridays.', 'По пятницам нам разрешали не ложиться допоздна.')}
    ${ex('I managed to / was able to get a ticket.', 'Мне удалось достать билет (единичный успех — не could).')}
    ${note('<strong>Внимание:</strong> для единичного успеха в прошлом — <i>was able to / managed to</i>, а не <i>could</i>: <i>I could swim</i> (умел вообще) ≠ <i>I managed to swim across</i> (смог в тот раз).')}`,
  compare: `
    ${tbl(['', 'needn’t have done', 'didn’t need to do'], [
      ['Действие было?', 'да, но зря', 'обычно нет'],
      ['Пример', 'I needn’t have cooked.', 'I didn’t need to cook.'],
      ['Рус.', 'Зря я готовил.', 'Мне не нужно было готовить.']])}
    <h3>Should, had better, be supposed to</h3>
    ${ex('You should try the soup.', 'Тебе стоит попробовать суп (совет).')}
    ${ex('You’d better not tell Mum.', 'Лучше не говори маме (а то влетит).')}
    ${ex('You’re supposed to book in advance.', 'Вообще-то нужно бронировать заранее (так положено).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>I could get tickets yesterday</i> (о единичном успехе) → <i>I managed to get</i>. <i>You had better to go</i> → <i>You’d better go</i>.')}`,
  dialog: [
    ['C', 'Where were you? You were supposed to be here at seven!', 'Где ты был? Ты должен был быть здесь в семь!'],
    ['D', 'Sorry. I must have been sleeping when you called. I didn’t hear the phone.', 'Прости. Я, видимо, спал, когда ты звонил. Не слышал телефон.'],
    ['C', 'Well, you’d better hurry. The film starts in twenty minutes.', 'Ну, тебе лучше поторопиться. Фильм через двадцать минут.'],
    ['D', 'I bought the tickets online, so we don’t have to queue.', 'Я купил билеты онлайн, так что стоять в очереди не придётся.'],
    ['C', 'Oh, you needn’t have done that. I’d already booked them.', 'Ой, зря ты это сделал. Я их уже забронировал.'],
    ['D', 'Seriously? You ought to have told me!', 'Серьёзно? Тебе следовало мне сказать!'],
    ['C', 'I tried! You can’t have been checking your messages.', 'Я пытался! Ты, похоже, вообще не проверял сообщения.'],
    ['D', 'True. Anyway, we’re allowed to cancel up to an hour before, so I’ll get a refund.', 'Правда. В любом случае отменить можно за час, так что верну деньги.'],
  ],
  test: [
    { q: 'I ___ taken a taxi. The station was only five minutes away.', o: ['didn’t need to', 'needn’t have', 'mustn’t have', 'hadn’t to'], a: 1, c: 0, e: 'Сделал, но зря → needn’t have + V3.' },
    { q: 'I ___ take a taxi because Tom gave me a lift.', o: ['didn’t need to', 'needn’t have', 'mustn’t', 'shouldn’t have'], a: 0, c: 0, e: 'Не было необходимости, не брал → didn’t need to.' },
    { q: 'You ___ take your shoes off in a Japanese home.', o: ['had better to', 'are supposing to', 'are supposed to', 'ought'], a: 2, c: 1, e: 'Правило, так принято → be supposed to.' },
    { q: 'The train ___ arrive at six, but it was late.', o: ['was supposed to', 'had better', 'must have', 'is to'], a: 0, c: 1, e: 'Ожидание, которое не сбылось → was supposed to.' },
    { q: 'You ___ hurry, or you’ll miss the bus.', o: ['had better to', 'would better', 'better to', '’d better'], a: 3, c: 2, e: 'had better + V без to.' },
    { q: 'You ___ to have told me earlier.', o: ['should', 'ought', 'had better', 'must'], a: 1, c: 2, e: 'ought to have + V3 — упрёк (ought всегда с to).' },
    { q: 'She didn’t answer. She ___ been sleeping.', o: ['must have', 'must', 'had better', 'needn’t have'], a: 0, c: 3, e: 'Догадка о процессе в прошлом → must have been + -ing.' },
    { q: 'They ___ been listening — they got everything wrong.', o: ['must have', 'can’t have', 'needn’t have', 'should'], a: 1, c: 3, e: 'Почти точно «нет» → can’t have been.' },
    { q: 'The fire spread fast, but everyone ___ escape.', o: ['could', 'can', 'was able to', 'ought to'], a: 2, c: 3, e: 'Единичный успех в прошлом → was able to / managed to.' },
    { q: 'As children, we ___ to stay up late on Fridays.', o: ['could', 'were allowed', 'had better', 'were supposed'], a: 1, c: 1, e: 'Разрешение в прошлом → were allowed to.' },
  ],
  feynman: {
    task: 'Объясните разницу между <i>needn’t have done</i> и <i>didn’t need to do</i>, а также между should, had better и be supposed to, так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему <i>I could get tickets yesterday</i> звучит неправильно о единичном успехе?', 'Когда <i>had better</i> уместно, а когда звучит грубо?', 'Как сказать «он должен был прийти (но не пришёл)»?', 'Сделайте 3 догадки о том, что делали ваши соседи вчера вечером.'],
  },
});
