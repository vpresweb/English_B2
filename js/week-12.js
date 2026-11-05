/* ===== WEEK 12 — B2 First exam ===== */
COURSE.weeks.push({
  n: 12,
  title: 'B2 First — подготовка к экзамену',
  tag: 'Итоговое повторение · формат · Use of English · симуляция · стратегия',
  goal: 'Знать формат экзамена Cambridge B2 First, особенно Reading and Use of English, пройти полную симуляцию, повторить всю грамматику курса и составить личную стратегию на день экзамена.',
  days: [
    ['Формат экзамена', ['Изучить структуру B2 First (раздел «Теория»)', 'Скачать бесплатные образцы на сайте Cambridge English', 'Засечь время: Reading and Use of English — 75 минут']],
    ['Use of English', ['Part 1–3: лексика, грамматика, словообразование', 'Part 4: перефразирование (2–5 слов, ключевое слово не менять)', 'Разобрать 20 заданий Part 4 — инверсия, пассив, условия']],
    ['Reading', ['Part 5–7: понимание, пропущенные предложения, поиск информации', 'Тренировать skimming и scanning', 'Разобрать каждую ошибку']],
    ['Writing', ['Эссе (Part 1) + один текст на выбор (Part 2), 80 минут', 'Проверить тексты по чек-листу недели 11', 'Посчитать слова: 140–190 в каждом']],
    ['Listening и Speaking', ['Listening (≈40 мин, 4 части); Speaking (≈14 мин, 4 части)', 'Part 2 Speaking: сравнить две фотографии за 1 минуту', 'Записать себя на видео и пересмотреть']],
    ['Грамматика и симуляция', ['Повторить шпаргалку из раздела «Формы»', 'Итоговый тест (раздел 🎯)', 'Все части подряд с таймером, самооценка']],
    ['Фейнман-урок курса', ['Объяснить всю грамматику B2 за 10 минут', 'Одна страница-шпаргалка', 'План на уровень C1 (C1 Advanced)']],
  ],
  progress: ['Формат', 'Грамматика: времена и условия', 'Грамматика: структуры', 'Стратегия'],
  theory: `
    <h3>Что такое B2 First</h3>
    <p><b>B2 First</b> (раньше — FCE, First Certificate in English) — экзамен Cambridge English уровня <b>B2</b>. Его принимают многие университеты и работодатели как подтверждение того, что вы свободно общаетесь, понимаете сложные тексты и пишете связно.</p>
    ${tbl(['Часть', 'Что проверяют', 'Время (ориентир.)'], [
      ['Reading and Use of English', '7 частей: лексика, грамматика, словообразование, перефразирование, чтение', '≈ 1 ч 15 мин'],
      ['Writing', 'эссе (обязательно) + статья / письмо / отчёт / отзыв, по 140–190 слов', '≈ 1 ч 20 мин'],
      ['Listening', '4 части: короткие записи, монолог, интервью', '≈ 40 мин'],
      ['Speaking', 'В паре: интервью, сравнение фото, совместное задание, обсуждение', '≈ 14 мин']])}
    ${tbl(['Балл (Cambridge English Scale)', 'Результат'], [
      ['180–190', 'Grade A — уровень C1'],
      ['173–179', 'Grade B — уровень B2'],
      ['160–172', 'Grade C — уровень B2'],
      ['140–159', 'сертификат уровня B1']])}
    ${note('<strong>Проверьте актуальные данные</strong> (время, части, баллы, цены и даты) на официальном сайте Cambridge English и в местном экзаменационном центре — формат может обновляться.')}
    <h3>Аналогия Фейнмана</h3>
    <p>B2 First — это <strong>марафон</strong>, а не спринт: почти четыре часа письменных частей. Побеждает не тот, кто знает больше всех правил, а тот, кто <strong>распределил силы</strong>: время на каждую часть, проверку и отдых между частями.</p>`,
  forms: `
    <h3>Шпаргалка по всей грамматике курса</h3>
    ${tbl(['Тема', 'Формула', 'Пример'], [
      ['Past Perfect Continuous', 'had been + -ing', 'She had been crying.'],
      ['Future Perfect Continuous', 'will have been + -ing', 'By May I’ll have been working here for 5 years.'],
      ['Будущее в прошлом', 'was going to / would', 'I knew he would come.'],
      ['Модальные B2', 'needn’t have V3, be supposed to, had better', 'You needn’t have paid.'],
      ['Mixed conditionals', 'If + had V3, would + V', 'If I’d studied, I’d be a doctor now.'],
      ['Альтернативы if', 'provided, unless, in case, otherwise', 'Take it in case it rains.'],
      ['Нереальное прошлое', 'wish / I’d rather / it’s time + Past', 'It’s time we left.'],
      ['Пассив B2', 'is said to have V3', 'He is said to have left.'],
      ['Каузатив', 'have sb do / get sb to do', 'I got him to help.'],
      ['Инверсия', 'Never have I…, No sooner had… than', 'Not only is it cheap, but…'],
      ['Выделение', 'What I need is…, It was… who', 'It was Tom who called.'],
      ['Причастные обороты', 'Doing…, Having done…, Done…', 'Having finished, I left.'],
      ['Инфинитив / герундий', 'regret doing / to do, seem to have done', 'It’s worth visiting.'],
      ['Словообразование', 'суффикс = часть речи, приставка = смысл', 'irresponsible, development']])}`,
  usage: `
    <h3>Стратегия на экзамене</h3>
    ${ul(['<b>Use of English Part 4:</b> ключевое слово не меняйте, пишите 2–5 слов (сокращения считаются за два), проверяйте, что смысл не изменился.', '<b>Use of English Part 3:</b> часть речи → отрицание → число (алгоритм недели 10).', '<b>Reading:</b> сначала вопросы, затем текст; в Part 7 ищите перефразирование, а не те же слова.', '<b>Writing:</b> 5 минут на план, 30 минут на текст, 5 минут на проверку — для каждой части.', '<b>Listening:</b> записи звучат дважды; не останавливайтесь на пропущенном ответе.', '<b>Speaking:</b> в Part 2 сравнивайте, а не описывайте: <i>Whereas in the first photo…, in the second…</i>'])}
    <h3>Полезные фразы для Speaking</h3>
    ${ul(['<i>Both pictures show…, but in the first one…, whereas…</i>', '<i>I’d say that… / It seems to me that…</i>', '<i>That’s a good point, but have you considered…?</i>', '<i>Shall we move on to…? So, have we reached a decision?</i>'])}`,
  compare: `
    <h3>Топ-10 ошибок русскоговорящих на B2</h3>
    ${tbl(['Ошибка', 'Правильно'], [
      ['I was waiting for an hour when he came.', 'I’<em>d been waiting</em> for an hour when he came.'],
      ['I knew he will be late.', 'I knew he <em>would</em> be late.'],
      ['If I would have studied, I would be…', 'If I <em>had studied</em>, I would be…'],
      ['Take a coat in case it will rain.', 'Take a coat in case it <em>rains</em>.'],
      ['It’s time we go.', 'It’s time we <em>went</em>.'],
      ['He is said that he lives in Paris.', 'He is said <em>to live</em> in Paris.'],
      ['Never I have seen…', 'Never <em>have I</em> seen…'],
      ['Walking home, the rain started.', 'Walking home, <em>I</em> got caught in the rain.'],
      ['It’s worth to visit.', 'It’s worth <em>visiting</em>.'],
      ['unpossible, unlegal', '<em>im</em>possible, <em>il</em>legal']])}`,
  dialog: [
    ['E', 'Here are your photographs. They show people learning in different situations. Compare them, and say what the people might find difficult.', 'Вот ваши фотографии. На них люди учатся в разных ситуациях. Сравните их и скажите, что им может быть трудно.'],
    ['C', 'Both photos show people learning something, but in the first one a student is studying alone at home, whereas in the second a group is attending a workshop.', 'На обеих фотографиях люди чему-то учатся, но на первой студент занимается один дома, тогда как на второй группа на мастер-классе.'],
    ['C', 'The student looks as if he’s been working for hours. He might find it hard to stay motivated without a teacher.', 'Студент выглядит так, будто занимается уже несколько часов. Ему может быть трудно сохранять мотивацию без преподавателя.'],
    ['C', 'In contrast, the people in the workshop seem to be enjoying themselves. However, they may have difficulty concentrating with so much noise.', 'Люди на мастер-классе, напротив, похоже, получают удовольствие. Однако им может быть трудно сосредоточиться при таком шуме.'],
    ['E', 'Thank you. Which way of learning do you prefer?', 'Спасибо. Какой способ обучения вы предпочитаете?'],
    ['P', 'Personally, I’d rather learn in a group. Had I studied alone, I would never have passed my last exam!', 'Лично я предпочитаю учиться в группе. Если бы я занимался один, никогда бы не сдал последний экзамен!'],
    ['C', 'That’s a good point, but what I like about studying alone is that I can choose my own pace.', 'Справедливо, но что мне нравится в самостоятельных занятиях — я сам выбираю темп.'],
    ['P', 'True. I suppose it depends on the person and the subject.', 'Верно. Думаю, это зависит от человека и предмета.'],
  ],
  test: [
    { q: 'How long is the B2 First Speaking test (approximately)?', o: ['5 minutes', '1 hour', '14 minutes', '40 minutes'], a: 2, c: 0, e: 'Speaking ≈ 14 минут, в паре.' },
    { q: 'In Use of English Part 4, you should…', o: ['change the key word', 'write 2–5 words without changing the key word', 'write one word only', 'write a whole new paragraph'], a: 1, c: 3, e: 'Ключевое слово не меняется, 2–5 слов.' },
    { q: 'By the time we arrived, they ___ for two hours.', o: ['have been waiting', 'were waiting', 'waited', 'had been waiting'], a: 3, c: 1, e: 'Длительность до момента в прошлом (неделя 1).' },
    { q: 'If I had studied medicine, I ___ a doctor now.', o: ['would be', 'would have been', 'will be', 'had been'], a: 0, c: 1, e: 'Mixed conditional: прошлое → настоящее (неделя 4).' },
    { q: 'It’s high time we ___ home.', o: ['go', 'went', 'will go', 'going'], a: 1, c: 2, e: 'It’s high time + Past (неделя 5).' },
    { q: 'The painting is believed ___ in the 15th century.', o: ['to paint', 'to be painting', 'painted', 'to have been painted'], a: 3, c: 2, e: 'Пассив B2: раньше + пассив → to have been + V3 (неделя 6).' },
    { q: 'No sooner had I sat down ___ the phone rang.', o: ['when', 'that', 'than', 'then'], a: 2, c: 2, e: 'No sooner … than (неделя 7).' },
    { q: '___ the report, she went home.', o: ['Having finished', 'Finish', 'Finished', 'Have finished'], a: 0, c: 2, e: 'Действие раньше → Having + V3 (неделя 8).' },
    { q: 'In Speaking Part 2, the best strategy is to…', o: ['describe every detail of one photo', 'compare the photos and answer the question', 'talk about yourself only', 'ask the examiner questions'], a: 1, c: 3, e: 'Сравнивайте фото и отвечайте на вопрос задания.' },
    { q: 'In Writing, each text should be…', o: ['50–80 words', '250–300 words', 'any length', '140–190 words'], a: 3, c: 3, e: 'Оба текста — 140–190 слов.' },
  ],
  feynman: {
    task: 'Итоговый урок: объясните всю грамматику B2 за 10 минут.',
    prompts: ['Как устроены mixed conditionals и чем они отличаются от third?', 'Когда нужна инверсия и как её построить за 3 секунды?', 'Какие три ошибки вы делали чаще всего за курс и как их больше не делать?', 'Как вы распределите время в Reading and Use of English?'],
  },
});
