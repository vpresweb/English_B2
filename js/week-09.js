/* ===== WEEK 9 — Gerund and infinitive B2 ===== */
COURSE.weeks.push({
  n: 9,
  title: 'Инфинитив и герундий B2',
  tag: 'regret / mean / go on · seem to have done · it’s worth doing · can’t help laughing',
  goal: 'Использовать глаголы с двумя значениями (regret, mean, go on, need), сложные формы инфинитива (to have done, to be doing), устойчивые выражения с -ing (it’s worth, there’s no point, can’t help) и прилагательные с предлогами.',
  days: [
    ['Повторение B1', ['remember / forget / stop / try + -ing или to', 'make / let / want somebody to', 'Составить 8 предложений о себе']],
    ['Ещё четыре «двуликих» глагола', ['<i>regret doing</i> (жалею, что сделал) / <i>regret to tell</i> (с сожалением сообщаю)', '<i>mean doing</i> (означать) / <i>mean to do</i> (намереваться)', '<i>go on doing</i> (продолжать то же) / <i>go on to do</i> (перейти к новому)']],
    ['Сложные инфинитивы', ['<i>to have done</i> — раньше: <i>He seems to have left.</i>', '<i>to be doing</i> — процесс: <i>She pretended to be reading.</i>', 'С глаголами seem, appear, pretend, claim, happen']],
    ['Выражения с -ing', ['<i>It’s worth / It’s no use / There’s no point (in)</i>', '<i>can’t help, can’t stand, don’t mind, feel like</i>', 'Составить 6 советов туристу: <i>It’s worth visiting…</i>']],
    ['Прилагательные + предлог + -ing', ['<i>keen on, fond of, capable of, tired of, responsible for</i>', '<i>used to, look forward to, object to</i> — to + -ing', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать эссе (140–190 слов): <i>Is it worth learning a language after 40?</i>', 'Найти в тексте каждое «двуликое» сочетание']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «прошлое после -ing, будущее после to»', 'Карточки: 30 моделей с примерами', 'Список пробелов → план недели 10 (словообразование)']],
  ],
  progress: ['Глаголы с двумя значениями', 'Сложные инфинитивы', 'Выражения с -ing', 'Прилагательное + предлог'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>У многих «двуликих» глаголов есть общая логика: <strong>-ing смотрит назад</strong> (то, что уже было или длится), <strong>to смотрит вперёд</strong> (то, что ещё предстоит).</p>
    ${ex('I regret telling her the secret.', 'Жалею, что рассказал ей секрет (уже рассказал — назад).')}
    ${ex('We regret to inform you that your flight is cancelled.', 'С сожалением сообщаем, что ваш рейс отменён (сообщаем сейчас — вперёд).')}
    <h3>Аналогия Фейнмана</h3>
    <p>-ing — это <strong>зеркало заднего вида</strong>: смотрим на то, что уже позади. to — <strong>лобовое стекло</strong>: смотрим на дорогу впереди. <i>I remember locking the door</i> — в зеркале. <i>Remember to lock the door</i> — в лобовом стекле.</p>
    ${note('<strong>Подсказка работает не всегда</strong> (enjoy, mind, avoid — просто «любят» -ing). Но для regret, remember, forget, stop, go on, mean — работает отлично.')}`,
  forms: `
    <h3>Глаголы с двумя значениями</h3>
    ${tbl(['Глагол', '+ -ing', '+ to + V'], [
      ['regret', 'жалеть о сделанном: <i>I regret leaving.</i>', 'с сожалением сообщать: <i>I regret to say…</i>'],
      ['mean', 'означать, влечь: <i>It means getting up early.</i>', 'намереваться: <i>I meant to call you.</i>'],
      ['go on', 'продолжать то же: <i>He went on talking.</i>', 'перейти к новому: <i>He went on to become president.</i>'],
      ['need', 'нужно сделать (пассивно): <i>The car needs washing.</i>', 'нужно (мне): <i>I need to wash the car.</i>'],
      ['try', 'попробовать способ: <i>Try restarting it.</i>', 'стараться: <i>I tried to fix it.</i>']])}
    <h3>Сложные инфинитивы</h3>
    ${tbl(['Форма', 'Значение', 'Пример'], [
      ['to do', 'одновременно / вообще', 'He seems to know the answer.'],
      ['to be doing', 'процесс сейчас', 'She appears to be sleeping.'],
      ['to have done', 'раньше', 'They claim to have seen a UFO.'],
      ['to have been doing', 'процесс раньше', 'He seems to have been working all night.']])}`,
  usage: `
    <h3>Выражения с -ing</h3>
    ${tbl(['Выражение', 'Пример', 'Рус.'], [
      ['It’s worth', 'It’s worth visiting the museum.', 'Стоит сходить в музей.'],
      ['It’s no use', 'It’s no use complaining.', 'Бесполезно жаловаться.'],
      ['There’s no point (in)', 'There’s no point (in) waiting.', 'Нет смысла ждать.'],
      ['can’t help', 'I couldn’t help laughing.', 'Я не мог не рассмеяться.'],
      ['can’t stand', 'I can’t stand queuing.', 'Терпеть не могу стоять в очереди.'],
      ['feel like', 'I don’t feel like going out.', 'Мне не хочется никуда идти.'],
      ['have difficulty (in)', 'She had difficulty finding a job.', 'Ей было трудно найти работу.']])}
    <h3>Прилагательное + предлог + -ing</h3>
    ${tbl(['Сочетание', 'Пример'], [
      ['keen on / fond of', 'He’s keen on <em>cycling</em>.'],
      ['capable of', 'She’s capable of <em>running</em> the company.'],
      ['tired of / sick of', 'I’m tired of <em>waiting</em>.'],
      ['responsible for', 'Who’s responsible for <em>booking</em> the rooms?'],
      ['object to / be used to', 'I object to <em>paying</em> so much.']])}`,
  compare: `
    ${tbl(['', '-ing (назад / процесс)', 'to (вперёд / цель)'], [
      ['remember', 'I remember meeting him.', 'Remember to meet him.'],
      ['regret', 'I regret saying that.', 'I regret to say that…'],
      ['go on', 'She went on working.', 'She went on to work in Paris.'],
      ['stop', 'He stopped smoking.', 'He stopped to smoke.']])}
    <h3>Seem + разные инфинитивы</h3>
    ${ex('He seems to be tired.', 'Он, кажется, устал (сейчас).')}
    ${ex('He seems to have been ill.', 'Похоже, он болел (раньше).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>It’s worth to visit</i> → <i>worth visiting</i>. <i>I couldn’t help to laugh</i> → <i>help laughing</i>. <i>I’m looking forward to meet you</i> → <i>to meeting</i>. <i>He seems to leave already</i> → <i>to have left</i>.')}`,
  dialog: [
    ['E', 'I meant to call you last night, but I fell asleep.', 'Я хотела позвонить тебе вчера вечером, но уснула.'],
    ['F', 'No problem. You seem to have been working really hard lately.', 'Ничего. Похоже, ты в последнее время очень много работаешь.'],
    ['E', 'I have. I’m tired of staying late every day. I regret taking this job sometimes.', 'Да. Я устала каждый день задерживаться. Иногда жалею, что согласилась на эту работу.'],
    ['F', 'Is it worth talking to your manager about it?', 'Может, стоит поговорить об этом с начальником?'],
    ['E', 'There’s no point. He’d just go on telling me how important the project is.', 'Нет смысла. Он просто продолжит рассказывать, как важен проект.'],
    ['F', 'Well, a new job would mean starting again, but you’re capable of doing so much more.', 'Новая работа будет означать начать заново, но ты способна на гораздо большее.'],
    ['E', 'Thanks. I can’t help thinking you’re right.', 'Спасибо. Не могу не думать, что ты прав.'],
    ['F', 'Remember to update your CV this weekend. I’m looking forward to hearing good news!', 'Не забудь обновить резюме на выходных. Жду хороших новостей!'],
  ],
  test: [
    { q: 'I regret ___ her the secret. I wish I hadn’t.', o: ['telling', 'to tell', 'tell', 'to have tell'], a: 0, c: 0, e: 'Жалею о сделанном → regret + -ing.' },
    { q: 'We regret ___ you that the flight is cancelled.', o: ['informing', 'inform', 'to inform', 'informed'], a: 2, c: 0, e: 'Официально сообщаем → regret + to.' },
    { q: 'After university, she went on ___ a famous lawyer.', o: ['becoming', 'become', 'became', 'to become'], a: 3, c: 0, e: 'Перешла к новому этапу → go on to + V.' },
    { q: 'He seems ___ already. His coat isn’t here.', o: ['to leave', 'to have left', 'leaving', 'having left'], a: 1, c: 1, e: 'Раньше момента речи → to have + V3.' },
    { q: 'She pretended ___ when I came in.', o: ['to be reading', 'reading', 'to have read', 'read'], a: 0, c: 1, e: 'Процесс в тот момент → to be + -ing.' },
    { q: 'It’s worth ___ the castle.', o: ['to visit', 'visit', 'visiting', 'visited'], a: 2, c: 2, e: 'It’s worth + -ing.' },
    { q: 'I couldn’t help ___ when he fell over.', o: ['to laugh', 'laugh', 'laughed', 'laughing'], a: 3, c: 2, e: 'can’t help + -ing.' },
    { q: 'There’s no point ___ now. The shop is closed.', o: ['going', 'to go', 'go', 'gone'], a: 0, c: 2, e: 'There’s no point (in) + -ing.' },
    { q: 'He’s very keen ___ photography.', o: ['of', 'in', 'at', 'on'], a: 3, c: 3, e: 'keen on.' },
    { q: 'Who’s responsible ___ the hotel?', o: ['of booking', 'for booking', 'to book', 'for book'], a: 1, c: 3, e: 'responsible for + -ing.' },
  ],
  feynman: {
    task: 'Объясните логику «зеркало заднего вида (-ing) и лобовое стекло (to)» так, чтобы понял 10-летний ребёнок.',
    prompts: ['Чем <i>I regret telling</i> отличается от <i>I regret to tell</i>?', 'Когда после seem нужен <i>to have done</i>?', 'Назовите 5 выражений, после которых всегда -ing.', 'Расскажите о 3 вещах, о которых вы жалеете, и 3, которые собирались сделать.'],
  },
});
