/* ===== WEEK 6 — Passive B2 ===== */
COURSE.weeks.push({
  n: 6,
  title: 'Пассив B2: безличные конструкции и каузатив',
  tag: 'He is said to have… · being told · get hurt · have someone do / get someone to do',
  goal: 'Передавать слухи и мнения через пассив с глаголами мышления (is said to have done, it is believed that), использовать пассивный инфинитив и герундий, get-пассив и каузативы have / get someone (to) do.',
  days: [
    ['Повторение B1', ['be + V3 во всех временах', 'have something done, it is said that', 'Написать новость (6 предложений) в пассиве']],
    ['Безличный пассив B2', ['<i>He is said to be…</i> (сейчас) / <i>to have been…</i> (раньше)', '<i>It is believed / reported / thought that…</i>', 'Переписать 6 слухов двумя способами']],
    ['Пассивный инфинитив и герундий', ['<i>to be done, to have been done</i>', '<i>being done, having been done</i>', '<i>I hate being interrupted. She wants to be promoted.</i>']],
    ['Get-пассив', ['<i>get hurt, get married, get lost, get fired, get stuck</i>', 'разговорный, часто о неприятностях и переменах', 'Рассказать о 5 случаях, когда вы got lost / stuck / caught']],
    ['Каузатив', ['<i>have someone do</i>: <i>I had the mechanic check the brakes.</i>', '<i>get someone to do</i>: <i>I got my brother to help me.</i>', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать отчёт (140–190 слов) для B2 First: <i>Improvements to our office</i>', 'Использовать 6 разных пассивных форм']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «он, говорят, был…» по-английски', 'Таблица: to be done / to have been done / being done', 'Список пробелов → план недели 7 (инверсия и эмфаза)']],
  ],
  progress: ['Безличный пассив', 'Пассивный инфинитив / герундий', 'Get-пассив', 'Каузатив'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Пассив B2 умеет <strong>передавать чужое мнение, не называя его автора</strong>: «говорят, что…», «считается, что…», «по сообщениям…» — так пишут новости и официальные тексты.</p>
    ${ex('The painting is believed to be worth millions.', 'Считается, что картина стоит миллионы.')}
    ${ex('He is said to have left the country.', 'Говорят, он уехал из страны (уехал раньше, говорят сейчас).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Это <strong>голос диктора новостей</strong>: он не говорит «мой сосед сказал», он говорит «по имеющимся данным». Конструкция с <i>is said to</i> как бы прячет источник за ширму.</p>
    ${note('<strong>Правило времени:</strong> если то, о чём говорят, происходит сейчас → <i>to be / to be doing</i>; если случилось раньше, чем говорят → <i>to have done / to have been</i>.')}`,
  forms: `
    <h3>Два способа передать мнение</h3>
    ${tbl(['It + passive + that', 'Подлежащее + passive + to', 'Время'], [
      ['It is said that he lives in Paris.', 'He is said <em>to live</em> in Paris.', 'сейчас'],
      ['It is believed that she is working abroad.', 'She is believed <em>to be working</em> abroad.', 'сейчас, процесс'],
      ['It is thought that they left in 2020.', 'They are thought <em>to have left</em> in 2020.', 'раньше'],
      ['It was reported that the bank had closed.', 'The bank was reported <em>to have closed</em>.', 'раньше в прошлом']])}
    <h3>Пассивный инфинитив и герундий</h3>
    ${tbl(['Форма', 'Пример', 'Рус.'], [
      ['to be + V3', 'I want <em>to be told</em> the truth.', 'Я хочу, чтобы мне сказали правду.'],
      ['to have been + V3', 'He seems <em>to have been</em> forgotten.', 'Похоже, о нём забыли.'],
      ['being + V3', 'She hates <em>being</em> photographed.', 'Она терпеть не может, когда её фотографируют.'],
      ['having been + V3', '<em>Having been</em> warned, we were careful.', 'Будучи предупреждёнными, мы были осторожны.']])}
    <h3>Каузатив</h3>
    ${tbl(['Конструкция', 'Пример'], [
      ['have + предмет + V3', 'I had my car repaired.'],
      ['have + человек + V', 'I had the mechanic <em>check</em> the brakes.'],
      ['get + человек + to + V', 'I got my brother <em>to help</em> me.'],
      ['get + предмет + V3', 'I need to get my passport renewed.']])}`,
  usage: `
    <h3>Get-пассив</h3>
    ${ul(['Неприятности: <i>He got hurt playing rugby. We got stuck in traffic.</i>', 'Перемены статуса: <i>They got married last year. She got promoted.</i>', 'Наказания: <i>He got caught cheating. She got fined.</i>'])}
    ${note('<strong>Стиль:</strong> get-пассив — разговорный. В эссе и отчётах B2 First лучше <i>be</i>: <i>Several employees were dismissed.</i>')}
    <h3>Have vs get someone to do</h3>
    ${ex('I had the hotel call me a taxi.', 'Я попросил отель вызвать мне такси (услуга, их работа).')}
    ${ex('I finally got my son to tidy his room.', 'Мне наконец удалось заставить сына убрать в комнате (пришлось уговаривать).')}
    <h3>Где встречается</h3>
    ${ul(['Новости: <i>Two men are reported to have been arrested.</i>', 'Наука: <i>The drug is thought to reduce the risk of…</i>', 'Отчёты: <i>The system needs to be updated.</i>'])}`,
  compare: `
    ${tbl(['', 'to be done', 'to have been done'], [
      ['Когда', 'одновременно / сейчас', 'раньше'],
      ['Пример', 'He is said to be rich.', 'He is said to have been rich.'],
      ['Рус.', 'Говорят, он богат.', 'Говорят, он был богат.']])}
    <h3>Active vs passive gerund</h3>
    ${ex('I don’t like interrupting people.', 'Я не люблю перебивать людей (я перебиваю).')}
    ${ex('I don’t like being interrupted.', 'Я не люблю, когда меня перебивают (меня перебивают).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>He is said that he lives…</i> → <i>He is said to live…</i> или <i>It is said that he lives…</i>. <i>I hate when people interrupt me</i> — можно, но короче и точнее <i>I hate being interrupted</i>.')}`,
  dialog: [
    ['R', 'Have you read about the old mansion on the hill?', 'Ты читал про старый особняк на холме?'],
    ['S', 'Yes! It’s said to have been built by a pirate in the 1700s.', 'Да! Говорят, его построил пират в 1700-х.'],
    ['R', 'And the owner is believed to be selling it for a ridiculous price.', 'А владелец, как считается, продаёт его за смешные деньги.'],
    ['S', 'I’d love to see it. I hate being stuck in the city all weekend.', 'Я бы хотела его увидеть. Терпеть не могу торчать в городе все выходные.'],
    ['R', 'Let’s go on Saturday. I’ll get my brother to lend us his car.', 'Поехали в субботу. Я уговорю брата одолжить нам машину.'],
    ['S', 'Is it safe? Didn’t it get damaged in the accident?', 'А она в порядке? Разве она не пострадала в аварии?'],
    ['R', 'He had a mechanic check everything last week, and he had the tyres replaced.', 'На прошлой неделе он попросил механика всё проверить и поменял шины.'],
    ['S', 'Perfect. Just make sure we don’t get lost this time!', 'Отлично. Только на этот раз давай не заблудимся!'],
  ],
  test: [
    { q: 'He is said ___ in Paris now.', o: ['living', 'that he lives', 'to live', 'to have lived'], a: 2, c: 0, e: 'Сейчас → is said to + V.' },
    { q: 'They are thought ___ the country in 2020.', o: ['to leave', 'leaving', 'that they left', 'to have left'], a: 3, c: 0, e: 'Раньше, чем говорят → to have + V3.' },
    { q: '___ that the bank had closed.', o: ['It was reported', 'The bank was reported', 'It reported', 'They were reported'], a: 0, c: 0, e: 'It + passive + that + предложение.' },
    { q: 'I want ___ the truth.', o: ['to tell', 'to be told', 'being told', 'telling'], a: 1, c: 1, e: 'Мне скажут → пассивный инфинитив to be told.' },
    { q: 'She hates ___ photographed.', o: ['being', 'to been', 'be', 'having'], a: 0, c: 1, e: 'hate + пассивный герундий: being + V3.' },
    { q: 'He seems ___ forgotten about the meeting.', o: ['to be', 'being', 'to have', 'having'], a: 2, c: 1, e: 'Раньше → to have + V3 (active: забыл он сам).' },
    { q: 'He ___ hurt playing rugby.', o: ['got', 'had', 'did', 'made'], a: 0, c: 2, e: 'Неприятность → get-пассив: got hurt.' },
    { q: 'I had the mechanic ___ the brakes.', o: ['to check', 'checked', 'checking', 'check'], a: 3, c: 3, e: 'have + человек + V (без to).' },
    { q: 'I finally got my son ___ his room.', o: ['tidy', 'tidied', 'to tidy', 'tidying'], a: 2, c: 3, e: 'get + человек + to + V.' },
    { q: 'I need to get my passport ___.', o: ['renew', 'renewed', 'to renew', 'renewing'], a: 1, c: 3, e: 'get + предмет + V3.' },
  ],
  feynman: {
    task: 'Объясните, как английский «прячет источник» через <i>He is said to…</i>, и разницу между have и get в каузативе так, чтобы понял 10-летний ребёнок.',
    prompts: ['Когда <i>to be</i>, а когда <i>to have been</i> после is said?', 'Чем <i>I hate interrupting</i> отличается от <i>I hate being interrupted</i>?', 'Почему get-пассив не стоит писать в официальном отчёте?', 'Перескажите 3 городских слуха через is believed / is said.'],
  },
});
