/* ===== WEEK 7 — Inversion and emphasis ===== */
COURSE.weeks.push({
  n: 7,
  title: 'Инверсия и выделение',
  tag: 'Never have I… · Not only… but also · No sooner… than · What I need is… · It was… that',
  goal: 'Делать речь выразительнее: использовать отрицательную инверсию (Never have I seen…, Not only…, Hardly… when, Only then…), выделительные конструкции (What I need is…, It was Tom who…) и эмфатическое do (I do like it!).',
  days: [
    ['Теория — «прожектор» на слове', ['Прочитать раздел «Теория»: зачем менять порядок слов', 'Аналогия Фейнмана: прожектор на сцене', 'Найти 3 примера инверсии в речах или книгах']],
    ['Never, rarely, seldom, little', ['<i>Never have I seen such a mess.</i>', '<i>Rarely do we eat out.</i> — с do / does / did', '<i>Little did I know that…</i> — и не подозревал']],
    ['Not only, no sooner, hardly', ['<i>Not only is it cheap, but it’s also fast.</i>', '<i>No sooner had I arrived than it started to rain.</i>', '<i>Hardly / Scarcely had we sat down when…</i>']],
    ['Only when, only after, under no circumstances', ['<i>Only when I left did I realise…</i> — инверсия во второй части', '<i>Under no circumstances should you…</i>', 'Составить 6 «правил безопасности» с инверсией']],
    ['Выделение', ['<i>What I need is a holiday.</i>', '<i>It was my sister who told me.</i>', '<i>I do like your new haircut!</i> — эмфатическое do']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать отзыв (140–190 слов) с 4 инверсиями и 2 выделениями']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: инверсия как «вопросительный порядок в утверждении»', 'Шпаргалка: 10 начал предложений, требующих инверсии', 'Список пробелов → план недели 8 (причастные обороты)']],
  ],
  progress: ['Never / rarely / little', 'Not only / no sooner / hardly', 'Only… / under no circumstances', 'Выделение и do'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Если поставить в начало предложения <strong>отрицательное или ограничительное слово</strong> (never, rarely, not only, only then), дальше идёт <strong>вопросительный порядок слов</strong>. Это делает фразу сильнее и официальнее.</p>
    ${ex('I have never seen such a beautiful sunset. → Never have I seen such a beautiful sunset.', 'Никогда я не видел такого красивого заката.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте сцену и <strong>прожектор</strong>. Обычно он светит на подлежащее. Инверсия переводит луч на слово <i>never</i> — и чтобы зритель заметил, актёры (подлежащее и вспомогательный глагол) <strong>меняются местами</strong>, как в вопросе.</p>
    ${note('<strong>Правило-проверка:</strong> составьте вопрос из второй части: <i>have I seen?</i> Теперь поставьте перед ним <i>Never</i> и точку: <i>Never have I seen…</i> Нет вспомогательного глагола — добавьте do / does / did: <i>Rarely do we…</i>')}
    <h3>Выделение без инверсии</h3>
    <p>Другой способ сделать акцент — <strong>разбить фразу на две части</strong>: <i>What I need is sleep.</i> (а не что-то другое), <i>It was Anna who called.</i> (а не кто-то другой).</p>`,
  forms: `
    <h3>Слова, после которых инверсия</h3>
    ${tbl(['Начало', 'Пример', 'Рус.'], [
      ['Never / Rarely / Seldom', 'Rarely <em>do</em> I watch TV.', 'Я редко смотрю телевизор.'],
      ['Little', 'Little <em>did</em> she know…', 'Она и не подозревала…'],
      ['Not only … but (also)', 'Not only <em>did</em> he lie, but he also stole.', 'Он не только солгал, но и украл.'],
      ['No sooner … than', 'No sooner <em>had</em> I left than it rained.', 'Не успел я выйти, как пошёл дождь.'],
      ['Hardly / Scarcely … when', 'Hardly <em>had</em> we started when the alarm rang.', 'Едва мы начали, как зазвенела тревога.'],
      ['Only when / Only after / Only then', 'Only then <em>did</em> I understand.', 'Только тогда я понял.'],
      ['Under no circumstances / On no account', 'On no account <em>should</em> you open it.', 'Ни в коем случае не открывай это.'],
      ['Not until', 'Not until midnight <em>did</em> they arrive.', 'Только в полночь они приехали.']])}
    <h3>Выделительные конструкции</h3>
    ${tbl(['Конструкция', 'Пример'], [
      ['What + подлежащее + глагол + is / was', 'What I love about London <em>is</em> the parks.'],
      ['It is / was + X + who / that', 'It <em>was</em> the noise <em>that</em> woke me up.'],
      ['All + подлежащее + глагол + is', 'All I want <em>is</em> a cup of tea.'],
      ['do / does / did + V', 'I <em>did</em> lock the door — I’m sure!']])}`,
  usage: `
    <h3>Only… — инверсия во второй части</h3>
    ${ex('Only when I got home did I realise I’d lost my keys.', 'Только придя домой, я понял, что потерял ключи.')}
    <p>Обратите внимание: <i>Only when I got home</i> — без инверсии, а главная часть <i>did I realise</i> — с инверсией.</p>
    <h3>Где использовать</h3>
    ${ul(['Эссе и статьи: <i>Not only does social media connect people, but it also…</i>', 'Рассказы: <i>No sooner had she opened the door than the lights went out.</i>', 'Инструкции: <i>Under no circumstances should the device be left unattended.</i>', 'Разговор: выделение и do — <i>What I don’t understand is why he left. I do hope you can come!</i>'])}
    ${note('<strong>Стиль:</strong> инверсия звучит книжно. В разговоре одна-две за вечер — эффектно, десять — смешно. В эссе B2 First 1–2 инверсии показывают уровень.')}`,
  compare: `
    ${tbl(['Обычно', 'С инверсией / выделением'], [
      ['I have never been so tired.', 'Never have I been so tired.'],
      ['He not only sings, he also dances.', 'Not only does he sing, but he also dances.'],
      ['As soon as I sat down, the phone rang.', 'No sooner had I sat down than the phone rang.'],
      ['I need a holiday.', 'What I need is a holiday.'],
      ['Tom broke the window.', 'It was Tom who broke the window.']])}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>Never I have seen</i> → <i>Never have I seen</i>. <i>No sooner I had arrived when…</i> → <i>No sooner had I arrived <em>than</em>…</i> (с no sooner — than, с hardly — when). <i>Rarely we go</i> → <i>Rarely do we go</i>.')}`,
  dialog: [
    ['V', 'How was the hotel in Rome?', 'Как был отель в Риме?'],
    ['H', 'Never have I stayed anywhere so awful! Not only was the room tiny, but it was also dirty.', 'Никогда я не останавливался в таком ужасном месте! Номер был не только крошечным, но и грязным.'],
    ['V', 'Oh no! Did you complain?', 'О нет! Ты пожаловался?'],
    ['H', 'Of course. But no sooner had I spoken to reception than the lights went out.', 'Конечно. Но не успел я поговорить с ресепшеном, как погас свет.'],
    ['V', 'You’re joking! What did you do?', 'Шутишь! И что ты сделал?'],
    ['H', 'Only when they offered us a free upgrade did I calm down.', 'Успокоился, только когда нам бесплатно предложили номер получше.'],
    ['V', 'Well, it was the location that mattered most, wasn’t it?', 'Ну, главным ведь было расположение, правда?'],
    ['H', 'True. What I loved about it was the view of the Colosseum. I do want to go back — just not to that hotel!', 'Правда. Что мне понравилось — это вид на Колизей. Я очень хочу вернуться, только не в тот отель!'],
  ],
  test: [
    { q: 'Never ___ such a beautiful sunset.', o: ['I have seen', 'I saw', 'have I seen', 'seen I have'], a: 2, c: 0, e: 'Never в начале → вопросительный порядок: have I seen.' },
    { q: 'Rarely ___ out during the week.', o: ['we eat', 'do we eat', 'we do eat', 'eat we'], a: 1, c: 0, e: 'Нет вспомогательного → do + подлежащее + V.' },
    { q: 'Little ___ that she would become famous.', o: ['did she know', 'she knew', 'she did know', 'knew she'], a: 0, c: 0, e: 'Little did + подлежащее + V — «и не подозревала».' },
    { q: 'Not only ___ late, but he also forgot the tickets.', o: ['he was', 'he did be', 'did he', 'was he'], a: 3, c: 1, e: 'Not only + was he.' },
    { q: 'No sooner had I arrived ___ it started to rain.', o: ['when', 'than', 'then', 'that'], a: 1, c: 1, e: 'No sooner … than.' },
    { q: 'Hardly had we sat down ___ the phone rang.', o: ['when', 'than', 'that', 'so'], a: 0, c: 1, e: 'Hardly / Scarcely … when.' },
    { q: 'Only when I got home ___ I had lost my keys.', o: ['I realised', 'realised I', 'I did realise', 'did I realise'], a: 3, c: 2, e: 'Only when…: инверсия в главной части.' },
    { q: 'Under no circumstances ___ open this door.', o: ['you should', 'should you', 'you must', 'do you should'], a: 1, c: 2, e: 'Under no circumstances + should you.' },
    { q: '___ I need is a long holiday.', o: ['That', 'Which', 'What', 'It'], a: 2, c: 3, e: 'Выделение: What I need is…' },
    { q: 'It was my sister ___ told me the news.', o: ['what', 'which', 'whom', 'who'], a: 3, c: 3, e: 'It was + человек + who.' },
  ],
  feynman: {
    task: 'Объясните инверсию как «прожектор, который меняет актёров местами», так, чтобы понял 10-летний ребёнок.',
    prompts: ['Какие слова в начале требуют инверсии? Назовите 6.', 'Почему с no sooner — than, а с hardly — when?', 'Где ставится инверсия после Only when…?', 'Перепишите 3 своих предложения с выделением: What I… is…, It was… who…'],
  },
});
