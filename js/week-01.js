/* ===== WEEK 1 — Past Perfect Continuous, narrative B2 ===== */
COURSE.weeks.push({
  n: 1,
  title: 'Past Perfect Continuous и повествование B2',
  tag: 'had been doing · все прошедшие времена · would / used to в рассказе',
  goal: 'Строить сложный рассказ о прошлом с пятью формами: Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous и used to / would. Объяснять причины прошлых состояний через had been doing.',
  days: [
    ['Повторение B1', ['Past Simple, Past Continuous, Past Perfect в истории', 'Маркеры: by the time, already, just, never … before', 'Пересказать историю вслух за 2 минуты']],
    ['Теория — длительный флешбэк', ['Прочитать раздел «Теория»: Past Perfect Continuous на шкале', 'Аналогия Фейнмана: флешбэк с видео, а не с фото', 'Написать 5 предложений: «я устал, потому что долго…»']],
    ['Формы и маркеры', ['had been + -ing; for / since / all day / how long', 'Отрицание <i>hadn’t been</i>, вопрос <i>How long had you been…?</i>', 'Составить 8 предложений о прошлом с for и since']],
    ['Simple или Continuous', ['<i>I had read the book</i> (результат) vs <i>I had been reading</i> (процесс)', 'Глаголы состояния — только Past Perfect Simple', 'Упражнение: 10 предложений на выбор формы']],
    ['Стиль рассказа', ['Начало с фоном: <i>It had been raining for hours…</i>', 'would и used to для прошлых привычек в воспоминаниях', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать историю (140–190 слов) для B2 First Writing Part 2', 'Отметить в тексте все пять форм прошлого']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: пять форм прошлого «как ребёнку»', 'Нарисовать одну шкалу со всеми формами', 'Список пробелов → план недели 2 (будущее B2)']],
  ],
  progress: ['Формы had been + -ing', 'Причина прошлого состояния', 'Simple или Continuous', 'Стиль рассказа'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Past Perfect Continuous — это <strong>процесс, который длился до момента в прошлом</strong> (и часто объясняет, почему тогда было так).</p>
    ${tl([['she had been crying', 'долго, до того момента', 1], ['I came in', 'момент в прошлом'], ['now', 'сейчас']])}
    ${ex('Her eyes were red. She had been crying.', 'Глаза у неё были красные. Она плакала (до этого, какое-то время).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Past Perfect — это <strong>флешбэк-фотография</strong>: что было сделано раньше. Past Perfect Continuous — <strong>флешбэк-видео</strong>: что <em>происходило</em> какое-то время до той сцены. Отсюда «следы»: мокрая улица, усталость, красные глаза.</p>
    ${note('<strong>Правило-проверка:</strong> в истории есть момент в прошлом, и вы объясняете его долгим процессом до него («потому что долго…», «уже два часа как…»)? Нужен had been + -ing.')}
    <h3>Пять форм прошлого в одном рассказе</h3>
    ${ex('It was late. We had been driving for hours and had already eaten all our snacks. When we finally saw the hotel, we were so happy. As children we would always sing on long journeys, but that night nobody did.', 'Было поздно. Мы ехали уже несколько часов и уже съели все запасы. Когда наконец увидели отель, были так счастливы. В детстве мы всегда пели в долгих поездках, но в ту ночь никто не пел.')}`,
  forms: `
    <h3>Past Perfect Continuous: had been + -ing</h3>
    ${tbl(['', 'Пример', 'Рус.'], [
      ['+', 'I’d been waiting for an hour.', 'Я ждал уже час.'],
      ['−', 'She <em>hadn’t been</em> sleeping well.', 'Она плохо спала (в тот период).'],
      ['?', 'How long <em>had</em> you <em>been</em> living there?', 'Сколько ты там прожил (к тому моменту)?']])}
    <h3>Все прошедшие формы</h3>
    ${tbl(['Форма', 'Роль', 'Пример'], [
      ['Past Simple', 'события сюжета', 'He opened the letter.'],
      ['Past Continuous', 'фон, процесс в момент', 'Rain was falling.'],
      ['Past Perfect', 'результат до момента', 'Someone had opened it before.'],
      ['Past Perfect Continuous', 'процесс до момента', 'He had been expecting it for weeks.'],
      ['used to / would', 'прошлые привычки', 'We would meet every Sunday.']])}
    ${note('<strong>Глаголы состояния</strong> (know, believe, own, want) не бывают в Continuous: <i>I had known him for years</i>, не <i>had been knowing</i>.')}`,
  usage: `
    <h3>Причина прошлого состояния</h3>
    ${ul(['<i>He was exhausted because he had been working all night.</i>', '<i>The ground was wet — it had been raining.</i>', '<i>They were angry because they had been waiting for two hours.</i>'])}
    <h3>Простой или длительный</h3>
    ${ex('I had been reading the book, so I knew the story.', 'Я читал эту книгу (процесс; возможно, не закончил).')}
    ${ex('I had read the book twice, so I knew the story.', 'Я прочитал книгу дважды (результат, количество).')}
    <h3>Would и used to в воспоминаниях</h3>
    ${ul(['<i>would</i> — только повторяющиеся действия: <i>Every summer we would rent a cottage.</i>', '<i>used to</i> — действия и состояния: <i>We used to have a cottage.</i>', 'Начинают часто с used to, продолжают would: <i>We used to go to Wales. We would walk for miles…</i>'])}`,
  compare: `
    ${tbl(['', 'Past Perfect Simple', 'Past Perfect Continuous'], [
      ['Фокус', 'результат, сколько', 'процесс, как долго'],
      ['Пример', 'She had written three letters.', 'She had been writing letters all morning.'],
      ['Вопрос', 'How many…?', 'How long…?'],
      ['Состояния', 'да: had known', 'нет']])}
    <h3>Present Perfect Continuous и Past Perfect Continuous</h3>
    ${ex('I’m tired. I’ve been working all day.', 'Я устал. Я работал весь день (до сейчас).')}
    ${ex('I was tired. I’d been working all day.', 'Я был уставшим. Я работал весь день (до того момента в прошлом).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> «Я ждал его уже час, когда он позвонил» → <i>I was waiting for an hour</i>. Длительность до момента в прошлом → <i>I’d been waiting for an hour when he called.</i>')}`,
  dialog: [
    ['A', 'You look shattered. What happened yesterday?', 'Ты выглядишь вымотанным. Что вчера случилось?'],
    ['L', 'I’d been looking forward to the concert for months, and then the train broke down.', 'Я ждал этот концерт несколько месяцев, а потом сломался поезд.'],
    ['A', 'Oh no! How long had you been sitting there?', 'О нет! Сколько ты там просидел?'],
    ['L', 'We’d been waiting for about two hours when they finally told us to get off.', 'Мы прождали часа два, когда нам наконец сказали выходить.'],
    ['A', 'Did you make it in the end?', 'Ты в итоге успел?'],
    ['L', 'Just about. By the time I arrived, the band had already played half their set.', 'Еле-еле. Когда я добрался, группа уже отыграла половину программы.'],
    ['A', 'What a shame. You used to go to all their gigs, didn’t you?', 'Как жаль. Ты же раньше ходил на все их концерты?'],
    ['L', 'Yes, at uni we would travel all over the country to see them. I’d never missed a show until yesterday!', 'Да, в универе мы ездили за ними по всей стране. До вчерашнего дня я не пропустил ни одного концерта!'],
  ],
  test: [
    { q: 'Her eyes were red. She ___.', o: ['has been crying', 'had been crying', 'was cried', 'cries'], a: 1, c: 1, e: 'Причина прошлого состояния, процесс до момента → had been crying.' },
    { q: 'We ___ for two hours when the bus finally came.', o: ['had been waiting', 'were waiting', 'have been waiting', 'waited'], a: 0, c: 0, e: 'Длительность до момента в прошлом → had been + -ing.' },
    { q: 'How long ___ there before you moved?', o: ['have you lived', 'did you living', 'were you living', 'had you been living'], a: 3, c: 0, e: 'Вопрос о длительности до момента в прошлом.' },
    { q: 'I ___ him for years before we became friends.', o: ['had been knowing', 'was knowing', 'had known', 'have known'], a: 2, c: 2, e: 'know — глагол состояния → Past Perfect Simple.' },
    { q: 'By noon she ___ ten emails.', o: ['had been writing', 'had written', 'was writing', 'has written'], a: 1, c: 2, e: 'Количество (ten) → Past Perfect Simple.' },
    { q: 'He was exhausted because he ___ all night.', o: ['works', 'has worked', 'had been working', 'was work'], a: 2, c: 1, e: 'Процесс до прошлого состояния → had been working.' },
    { q: 'Every summer we ___ rent a cottage by the sea. (привычка)', o: ['would', 'had', 'were', 'have'], a: 0, c: 3, e: 'Повторяющееся действие в воспоминаниях → would.' },
    { q: 'We ___ a dog when I was a child. (состояние)', o: ['would have', 'were having', 'had been had', 'used to have'], a: 3, c: 3, e: 'Состояние в прошлом → used to, не would.' },
    { q: 'It ___ for hours, and the streets were flooded.', o: ['has rained', 'had been raining', 'was rain', 'rains'], a: 1, c: 1, e: 'Видимый след в прошлом → had been raining.' },
    { q: 'The ground was wet. Choose the best start for a story:', o: ['It had been raining all night.', 'It has been raining all night.', 'It rains all night.', 'It will rain all night.'], a: 0, c: 3, e: 'Фон в начале истории о прошлом → Past Perfect Continuous.' },
  ],
  feynman: {
    task: 'Объясните разницу между «флешбэком-фото» (had done) и «флешбэком-видео» (had been doing) так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему <i>I was waiting for an hour when he called</i> — неточно?', 'Когда в воспоминаниях можно would, а когда только used to?', 'Как связаны Present Perfect Continuous и Past Perfect Continuous?', 'Расскажите историю из 8 предложений, используя все пять форм прошлого.'],
  },
});
