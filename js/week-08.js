/* ===== WEEK 8 — Participle clauses ===== */
COURSE.weeks.push({
  n: 8,
  title: 'Причастные обороты',
  tag: 'Walking home, I… · Having finished… · Built in 1900, … · the man sitting there',
  goal: 'Сокращать придаточные с помощью причастий: -ing для одновременных действий и причины, having + V3 для предшествующих, V3 для пассива. Сокращать относительные предложения (the girl wearing red, cars made in Japan) и избегать «висячих» причастий.',
  days: [
    ['Теория — сжать два предложения в одно', ['Прочитать раздел «Теория»: оборот вместо when / because / who', 'Аналогия Фейнмана: застёжка-молния', 'Найти 5 причастных оборотов в художественном тексте']],
    ['-ing обороты', ['одновременно: <i>Walking home, I met Tom.</i>', 'причина: <i>Feeling tired, she went to bed.</i>', 'Объединить 8 пар предложений']],
    ['Having + V3', ['одно действие раньше другого: <i>Having finished work, he went home.</i>', 'причина в прошлом: <i>Having lived in Spain, she speaks Spanish.</i>', 'Отрицание: <i>Not having heard the news, I was surprised.</i>']],
    ['V3 обороты (пассив)', ['<i>Built in 1900, the hotel is the oldest in town.</i>', '<i>Asked about the plans, he refused to comment.</i>', 'Описать 5 достопримечательностей с V3 оборотом']],
    ['Сокращённые относительные', ['<i>the man (who is) sitting there → the man sitting there</i>', '<i>cars (which are) made in Japan → cars made in Japan</i>', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать историю (140–190 слов) с 5 причастными оборотами', 'Проверить каждое причастие на «висячесть»']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: три вида оборотов и одно главное правило', 'Таблица: doing / having done / done', 'Список пробелов → план недели 9 (инфинитив и герундий B2)']],
  ],
  progress: ['-ing обороты', 'Having + V3', 'V3 обороты', 'Сокращённые придаточные'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Причастный оборот — это <strong>придаточное предложение без союза и подлежащего</strong>. Вместо <i>When I was walking home, I met Tom</i> говорим <i>Walking home, I met Tom.</i></p>
    ${ex('Having finished my work, I went for a walk.', 'Закончив работу, я пошёл прогуляться.')}
    ${ex('Built in 1900, the hotel is the oldest in town.', 'Построенный в 1900 году, отель — старейший в городе.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Два предложения — две половинки куртки. Причастие — <strong>застёжка-молния</strong>: оно «сшивает» их, убирая лишние детали (when, because, who + подлежащее). Но молния работает, только если у обеих половинок <strong>один хозяин</strong> — одно подлежащее.</p>
    ${note('<strong>Главное правило:</strong> подлежащее оборота = подлежащее главного предложения. <i>Walking home, the rain started</i> — ошибка (дождь не шёл домой). Правильно: <i>Walking home, I got caught in the rain.</i>')}
    <h3>В русском это деепричастия и причастия</h3>
    <p>«Идя домой…», «закончив работу…», «построенный в 1900 году…» — английские обороты работают похоже, поэтому их легко понять, но важно не перепутать форму.</p>`,
  forms: `
    <h3>Три вида оборотов</h3>
    ${tbl(['Форма', 'Значение', 'Пример', 'Вместо'], [
      ['V-ing', 'одновременно / причина', 'Feeling ill, she stayed at home.', 'Because she felt ill…'],
      ['Having + V3', 'раньше / причина в прошлом', 'Having read the book, I knew the ending.', 'Because I had read…'],
      ['V3', 'пассив', 'Written in 1850, the novel is still popular.', 'Although it was written…'],
      ['Having been + V3', 'пассив раньше', 'Having been warned, we were careful.', 'Because we had been warned…']])}
    <h3>Отрицание</h3>
    ${tbl(['Пример', 'Рус.'], [
      ['<em>Not</em> knowing what to say, I kept quiet.', 'Не зная, что сказать, я промолчал.'],
      ['<em>Not</em> having slept, he felt terrible.', 'Не поспав, он чувствовал себя ужасно.']])}
    <h3>Сокращённые относительные придаточные</h3>
    ${tbl(['Полное', 'Сокращённое'], [
      ['the girl who is wearing red', 'the girl <em>wearing</em> red'],
      ['the people who live next door', 'the people <em>living</em> next door'],
      ['products which are made in Italy', 'products <em>made</em> in Italy'],
      ['the man who was arrested yesterday', 'the man <em>arrested</em> yesterday']])}`,
  usage: `
    <h3>После союзов</h3>
    ${ul(['<i>After finishing the report, she left.</i>', '<i>Before leaving, check the windows.</i>', '<i>While waiting for the bus, I read the news.</i>', '<i>When asked about it, he said nothing.</i>'])}
    <h3>Где встречается</h3>
    ${ul(['Рассказы: <i>Opening the door, she saw a stranger.</i>', 'Новости: <i>The man, arrested on Monday, has been released.</i>', 'Эссе: <i>Having considered both sides, I believe…</i>', 'Описания: <i>Surrounded by mountains, the village is very quiet.</i>'])}
    ${note('<strong>Стиль:</strong> обороты сокращают текст и повышают оценку за язык в Writing B2 First. Но в разговоре они звучат книжно — там лучше обычные придаточные.')}`,
  compare: `
    ${tbl(['', 'Doing', 'Having done'], [
      ['Время', 'одновременно', 'раньше'],
      ['Пример', 'Walking along the beach, we talked.', 'Having walked for hours, we were tired.'],
      ['Рус.', 'Гуляя по пляжу…', 'Прогуляв несколько часов…']])}
    <h3>-ing или V3 (active или passive)</h3>
    ${ex('The film showing at the cinema is great.', 'Фильм, который идёт в кинотеатре, отличный (фильм показывается — active-форма в обороте).')}
    ${ex('The film shown last night was boring.', 'Фильм, показанный вчера, был скучным (passive).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> висячие причастия: <i>Being a sunny day, we went out</i> → <i>It being a sunny day…</i> или <i>As it was a sunny day…</i>. <i>Having finish</i> → <i>Having finished</i>.')}`,
  dialog: [
    ['G', 'Welcome to Bath. Founded by the Romans, the city is famous for its hot springs.', 'Добро пожаловать в Бат. Основанный римлянами, город знаменит горячими источниками.'],
    ['T', 'Who’s the man standing by the fountain?', 'Кто этот мужчина, стоящий у фонтана?'],
    ['G', 'That’s a statue of King Bladud. Having caught a disease, he was cured by the waters here, according to the legend.', 'Это статуя короля Бладуда. По легенде, заболев, он исцелился здешними водами.'],
    ['T', 'Fascinating! And the buildings made of yellow stone?', 'Потрясающе! А здания из жёлтого камня?'],
    ['G', 'Built in the eighteenth century, they’re called Georgian architecture.', 'Построенные в восемнадцатом веке, они относятся к георгианской архитектуре.'],
    ['T', 'Not knowing much about history, I’d never heard of that.', 'Плохо зная историю, я никогда об этом не слышал.'],
    ['G', 'Don’t worry. Having seen the Roman Baths, you’ll understand much more.', 'Не волнуйтесь. Посмотрев Римские бани, вы поймёте гораздо больше.'],
    ['T', 'Great. Before going in, can I take a photo of the people playing music over there?', 'Отлично. Перед тем как войти, можно сфотографировать людей, играющих там музыку?'],
  ],
  test: [
    { q: '___ home, I met an old friend.', o: ['Walked', 'Walking', 'Having walk', 'To walk'], a: 1, c: 0, e: 'Одновременное действие → V-ing.' },
    { q: '___ tired, she went to bed early.', o: ['Feeling', 'Felt', 'Having feel', 'Be feeling'], a: 0, c: 0, e: 'Причина, одновременно → Feeling.' },
    { q: '___ my work, I went for a walk.', o: ['Finishing', 'Finished', 'Having finished', 'Have finished'], a: 2, c: 1, e: 'Одно действие раньше другого → Having + V3.' },
    { q: '___ heard the news, I was surprised.', o: ['Not having', 'Having not been', 'No having', 'Not have'], a: 0, c: 1, e: 'Отрицание: Not having + V3.' },
    { q: '___ in 1900, the hotel is the oldest in town.', o: ['Building', 'Having built', 'Being build', 'Built'], a: 3, c: 2, e: 'Пассив → V3: Built.' },
    { q: '___ about the plans, the minister refused to comment.', o: ['Asking', 'Asked', 'Having asked', 'To ask'], a: 1, c: 2, e: 'Министра спросили → пассивный оборот: Asked.' },
    { q: 'The girl ___ red is my cousin.', o: ['wears', 'worn', 'who wearing', 'wearing'], a: 3, c: 3, e: 'who is wearing → wearing.' },
    { q: 'Cars ___ in Japan are very reliable.', o: ['making', 'made', 'make', 'are made'], a: 1, c: 3, e: 'which are made → made.' },
    { q: 'Which sentence is correct?', o: ['Walking home, the rain started.', 'Walking home, it started to rain on me.', 'Walking home, I got caught in the rain.', 'Walked home, I got caught in the rain.'], a: 2, c: 3, e: 'Подлежащее оборота = подлежащее главной части (I).' },
    { q: 'While ___ for the bus, I read the news.', o: ['waited', 'waiting', 'wait', 'to wait'], a: 1, c: 0, e: 'После while → V-ing.' },
  ],
  feynman: {
    task: 'Объясните причастный оборот как «молнию, которая сшивает два предложения», и правило «одного хозяина» так, чтобы понял 10-летний ребёнок.',
    prompts: ['Чем <i>Doing</i> отличается от <i>Having done</i>?', 'Почему <i>Walking home, the rain started</i> — ошибка?', 'Когда оборот начинается с V3?', 'Опишите свой город тремя предложениями с причастными оборотами.'],
  },
});
