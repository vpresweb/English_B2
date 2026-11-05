/* ===== WEEK 10 — Word formation ===== */
COURSE.weeks.push({
  n: 10,
  title: 'Словообразование',
  tag: '-tion, -ment, -ness, -ity · -ful, -less, -ous, -able · un-, in-, im-, dis-, mis- · -en, -ise',
  goal: 'Образовывать существительные, прилагательные, наречия и глаголы с помощью суффиксов и приставок, правильно выбирать отрицательную приставку и проходить Use of English Part 3 (Word formation) экзамена B2 First.',
  days: [
    ['Теория — слово как конструктор', ['Прочитать раздел «Теория»: корень + суффикс = часть речи', 'Аналогия Фейнмана: смена костюма', 'Выписать 10 слов одной семьи: <i>act, action, active, actively, activity…</i>']],
    ['Существительные', ['-tion / -sion, -ment, -ness, -ity, -ance / -ence', 'люди: -er / -or, -ist, -ant, -ee', 'Составить «семьи» для 10 глаголов']],
    ['Прилагательные', ['-ful / -less, -ous, -able / -ible, -ive, -al, -ic', '-ed / -ing: <i>bored / boring</i>', 'Описать фильм 10 прилагательными с суффиксами']],
    ['Отрицательные приставки', ['un-, in-, im- (перед p, m), il- (перед l), ir- (перед r)', 'dis-, mis- (неправильно), over- / under-', 'Таблица: 30 слов с правильной приставкой']],
    ['Глаголы и наречия', ['-en (widen, strengthen), -ise / -ize (modernise), en- (enable)', 'наречия -ly; исключения: <i>good → well, hard → hard</i>', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Решить 2 образца Use of English Part 3 (по 8 пропусков)', 'Проверить: часть речи, число, отрицание']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: как за 3 шага найти нужную форму слова', 'Шпаргалка: суффиксы по частям речи', 'Список пробелов → план недели 11 (письмо B2)']],
  ],
  progress: ['Существительные', 'Прилагательные', 'Отрицательные приставки', 'Глаголы и наречия'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Английское слово меняет <strong>часть речи с помощью суффикса</strong>, а смысл — с помощью <strong>приставки</strong>. Зная 30 суффиксов и 8 приставок, можно «достроить» тысячи слов.</p>
    ${ex('decide → decision → decisive → decisively → indecisive', 'решать → решение → решительный → решительно → нерешительный')}
    <h3>Аналогия Фейнмана</h3>
    <p>Корень слова — <strong>актёр</strong>, а суффикс — <strong>костюм</strong>. В костюме <i>-tion</i> он играет существительное, в костюме <i>-ive</i> — прилагательное, в <i>-ly</i> — наречие. Приставка <i>un-</i> или <i>dis-</i> — это маска «наоборот».</p>
    ${note('<strong>Алгоритм для Use of English Part 3:</strong> 1) Какая часть речи нужна по месту в предложении? (после артикля — сущ., перед сущ. — прил., при глаголе — нареч.) 2) Нужно ли отрицание по смыслу? 3) Единственное или множественное число?')}`,
  forms: `
    <h3>Суффиксы существительных</h3>
    ${tbl(['Суффикс', 'Примеры'], [
      ['-tion / -sion', 'inform → information, decide → decision'],
      ['-ment', 'develop → development, agree → agreement'],
      ['-ness', 'happy → happiness, aware → awareness'],
      ['-ity', 'possible → possibility, popular → popularity'],
      ['-ance / -ence', 'appear → appearance, differ → difference'],
      ['-er / -or / -ist / -ant / -ee', 'teacher, actor, scientist, assistant, employee']])}
    <h3>Суффиксы прилагательных</h3>
    ${tbl(['Суффикс', 'Примеры'], [
      ['-ful / -less', 'care → careful / careless, use → useful / useless'],
      ['-ous', 'danger → dangerous, fame → famous'],
      ['-able / -ible', 'comfort → comfortable, response → responsible'],
      ['-ive', 'create → creative, attract → attractive'],
      ['-al / -ic', 'nation → national, economy → economic'],
      ['-ed / -ing', 'interested (кто) / interesting (что)']])}
    <h3>Отрицательные приставки</h3>
    ${tbl(['Приставка', 'Когда', 'Примеры'], [
      ['un-', 'самая частая', 'unhappy, unusual, unemployed'],
      ['in-', 'латинские корни', 'incorrect, independent, inexpensive'],
      ['im-', 'перед p, m', 'impossible, impatient, immature'],
      ['il-', 'перед l', 'illegal, illogical'],
      ['ir-', 'перед r', 'irregular, irresponsible'],
      ['dis-', 'глаголы, некоторые прил.', 'disagree, dishonest, disappear'],
      ['mis-', 'неправильно', 'misunderstand, misspell']])}`,
  usage: `
    <h3>Глаголы из прилагательных и существительных</h3>
    ${tbl(['Способ', 'Примеры'], [
      ['-en', 'wide → widen, strong → strengthen, short → shorten'],
      ['-ise / -ize', 'modern → modernise, critic → criticise'],
      ['-ify', 'simple → simplify, class → classify'],
      ['en-', 'able → enable, courage → encourage']])}
    <h3>Наречия</h3>
    ${ul(['Обычно прил. + <i>-ly</i>: <i>careful → carefully, happy → happily</i>', 'Исключения: <i>good → well, hard → hard, fast → fast, late → late</i>', 'Ловушка: <i>hardly</i> = «едва», <i>lately</i> = «в последнее время»'])}
    <h3>Пример из экзамена</h3>
    ${ex('The museum was closed due to a lack of ___ . (FUND) → funding', 'Пропуск после «a lack of» → существительное.')}
    ${ex('It was ___ of him to leave the door open. (RESPONSIBLE) → irresponsible', 'По смыслу упрёк → отрицание ir- (перед r).')}`,
  compare: `
    ${tbl(['Корень', 'Сущ.', 'Прил.', 'Нареч.', 'Отрицание'], [
      ['success', 'success', 'successful', 'successfully', 'unsuccessful'],
      ['patience', 'patience', 'patient', 'patiently', 'impatient'],
      ['legal', 'legality', 'legal', 'legally', 'illegal'],
      ['honest', 'honesty', 'honest', 'honestly', 'dishonest'],
      ['create', 'creation / creativity', 'creative', 'creatively', '—']])}
    <h3>-ed или -ing</h3>
    ${ex('The lecture was boring, so I was bored.', 'Лекция была скучной, поэтому мне было скучно.')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>unpossible</i> → <i>impossible</i>; <i>unlegal</i> → <i>illegal</i>; <i>I’m boring</i> (я скучный!) вместо <i>I’m bored</i>; <i>He works hardly</i> (едва работает) вместо <i>He works hard</i>.')}`,
  dialog: [
    ['W', 'How did your job interview go?', 'Как прошло собеседование?'],
    ['O', 'Unbelievably well! The manager was really friendly and supportive.', 'Невероятно хорошо! Менеджер был очень дружелюбным и доброжелательным.'],
    ['W', 'What did they ask about?', 'О чём спрашивали?'],
    ['O', 'Mostly my previous experience and how I deal with disagreements in a team.', 'В основном о прошлом опыте и о том, как я решаю разногласия в команде.'],
    ['W', 'That’s a tricky question. What did you say?', 'Каверзный вопрос. Что ты ответила?'],
    ['O', 'I said communication is essential and that misunderstandings usually come from impatience.', 'Сказала, что общение очень важно и что недопонимание обычно возникает из-за нетерпения.'],
    ['W', 'Very diplomatic! Do you think you were successful?', 'Очень дипломатично! Думаешь, у тебя получилось?'],
    ['O', 'Hopefully. They said the decision would be made by Friday. I’m incredibly excited!', 'Надеюсь. Сказали, что решение примут к пятнице. Я невероятно взволнована!'],
  ],
  test: [
    { q: 'We need to make a ___ by Friday. (DECIDE)', o: ['decide', 'decisive', 'decision', 'decided'], a: 2, c: 0, e: 'После a → существительное: decision.' },
    { q: 'The ___ of the city has been rapid. (DEVELOP)', o: ['development', 'developing', 'developer', 'developed'], a: 0, c: 0, e: 'После the → существительное: development.' },
    { q: 'Be ___ with that knife! (CARE)', o: ['careless', 'carefully', 'caring', 'careful'], a: 3, c: 1, e: 'После be → прилагательное, по смыслу «осторожный».' },
    { q: 'The film was so ___ that I fell asleep. (BORE)', o: ['bored', 'boredom', 'boring', 'boringly'], a: 2, c: 1, e: 'Свойство фильма → -ing: boring.' },
    { q: 'It’s ___ to park here. You’ll get a fine. (LEGAL)', o: ['illegal', 'unlegal', 'inlegal', 'dislegal'], a: 0, c: 2, e: 'Перед l → il-: illegal.' },
    { q: 'It’s ___ to finish in one day. (POSSIBLE)', o: ['unpossible', 'inpossible', 'dispossible', 'impossible'], a: 3, c: 2, e: 'Перед p → im-: impossible.' },
    { q: 'Leaving the door open was very ___ . (RESPONSIBLE)', o: ['unresponsible', 'irresponsible', 'disresponsible', 'inresponsible'], a: 1, c: 2, e: 'Перед r → ir-: irresponsible.' },
    { q: 'They plan to ___ the road. (WIDE)', o: ['widely', 'width', 'wideness', 'widen'], a: 3, c: 3, e: 'Нужен глагол → -en: widen.' },
    { q: 'She speaks English very ___ . (GOOD)', o: ['goodly', 'good', 'well', 'better'], a: 2, c: 3, e: 'Наречие от good → well.' },
    { q: 'He works very ___ . (усердно)', o: ['hard', 'hardly', 'hardy', 'hardness'], a: 0, c: 3, e: 'hard — наречие без -ly; hardly = «едва».' },
  ],
  feynman: {
    task: 'Объясните словообразование как «актёра в разных костюмах» и алгоритм из трёх шагов для Use of English Part 3 так, чтобы понял 10-летний ребёнок.',
    prompts: ['Как выбрать между un-, in-, im-, il-, ir-?', 'Чем bored отличается от boring?', 'Почему <i>He works hardly</i> — ошибка?', 'Постройте полные «семьи» для слов create, success, care.'],
  },
});
