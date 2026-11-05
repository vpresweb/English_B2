// Ядро курса: данные, хранилище прогресса, помощники разметки и озвучка.
// Обычные скрипты (не модули), чтобы курс открывался и двойным кликом по index.html.

window.COURSE = { weeks: [] };

// ── ХРАНИЛИЩЕ ──
// localStorage может быть недоступен (приватный режим), тогда прогресс живёт до перезагрузки.
(function () {
  const PREFIX = 'enB2:';
  const memory = {};
  window.store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(PREFIX + key);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) {
        return key in memory ? memory[key] : fallback;
      }
    },
    set(key, value) {
      memory[key] = value;
      try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* только память */ }
    },
  };
})();

// ── ПОМОЩНИКИ РАЗМЕТКИ ── (используются в файлах недель)
// Пример: английская фраза и перевод.
window.ex = (en, ru) => `<div class="ex"><b>${en}</b><span>${ru}</span></div>`;
window.note = (html) => `<div class="note">${html}</div>`;
window.tbl = (head, rows) => `<div class="tbl-wrap"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
// Временная шкала: [подпись, пояснение, выделить?].
window.tl = (points) => `<div class="timeline">${points.map((p) => `<div class="pt${p[2] ? ' hl' : ''}"><b>${p[0]}</b><span>${p[1]}</span></div>`).join('')}</div>`;
window.ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

(function () {
  // ── ОЗВУЧКА ──
  // Голос выбирается в порядке en-GB → en-US → любой английский.
  const PREFERRED_LANGS = ['en-gb', 'en-us'];
  // Если фраза не начала звучать за это время, синтезатор считается зависшим.
  const START_TIMEOUT = 2000;
  let voice = null;
  // Текущая фраза. Ссылка на неё ещё и не даёт сборщику мусора удалить utterance —
  // иначе Chrome не присылает end и считает, что речь продолжается.
  let active = null;

  const supported = () => 'speechSynthesis' in window;
  const langOf = (v) => v.lang.replace('_', '-').toLowerCase();

  function pickVoice() {
    const voices = speechSynthesis.getVoices();
    for (const lang of PREFERRED_LANGS) {
      const found = voices.find((v) => langOf(v) === lang);
      if (found) return found;
    }
    return voices.find((v) => langOf(v).startsWith('en')) || null;
  }

  // onEnd вызывается, когда фраза дозвучала до конца (не прервана другой) — так читается диалог целиком.
  window.speak = (text, element, onEnd) => say(text, element, onEnd, false);

  // retry — повторная попытка после сбоя: сетевые голоса Chrome (Google …) иногда молча
  // не отвечают, тогда синтезатор сбрасывается и фраза отправляется ещё раз.
  function say(text, element, onEnd, retry) {
    if (!supported() || !text) return;
    voice = voice || pickVoice();
    if (speechSynthesis.speaking || speechSynthesis.pending) speechSynthesis.cancel();
    // resume() снимает «залипшую» паузу синтезатора после простоя.
    speechSynthesis.resume();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voice ? voice.lang : 'en-GB';
    if (voice) utterance.voice = voice;
    utterance.rate = 0.9;

    const state = { text, element, utterance, started: false, ended: false };
    active = state;
    if (element) element.classList.add('saying');
    const finish = () => {
      state.ended = true;
      // Подсветку не снимаем, если тот же элемент уже озвучивается новой фразой.
      if (element && (active === state || active.element !== element)) element.classList.remove('saying');
    };
    const again = () => {
      if (retry || active !== state) return;
      speechSynthesis.cancel();
      say(text, element, onEnd, true);
    };

    utterance.addEventListener('start', () => { state.started = true; });
    utterance.addEventListener('end', () => {
      finish();
      if (onEnd && active === state) onEnd();
    });
    utterance.addEventListener('error', (event) => {
      finish();
      // interrupted и canceled — это наш собственный cancel(), а не сбой.
      if (event.error !== 'interrupted' && event.error !== 'canceled') again();
    });
    setTimeout(() => {
      if (state.started || state.ended) return;
      finish();
      again();
    }, START_TIMEOUT);

    speechSynthesis.speak(utterance);
  }

  // Текст для озвучки: без транскрипции [..], русских пояснений и служебных знаков.
  // Пустая строка — элемент не озвучивается.
  const CYR = /[А-Яа-яЁё]/;
  window.cleanSpeech = function (t) {
    t = (t || '')
      .replace(/\[[^\]]*\]/g, ' ')
      .replace(/\([^)]*[А-Яа-яЁё][^)]*\)/g, ' ')
      .replace(/[«»“”"]/g, '')
      .replace(/_{2,}/g, ' … ')
      .replace(/\s*[·/→=+|]\s*/g, ', ')
      .replace(/^\s*\d+[.)]\s+/, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!t || CYR.test(t) || !/[A-Za-z]/.test(t)) return '';
    return t;
  };

  if (supported()) {
    const check = () => {
      if (!speechSynthesis.getVoices().length) return;
      voice = pickVoice();
      const note = document.getElementById('speech-note');
      if (note) note.hidden = Boolean(voice);
    };
    check();
    speechSynthesis.addEventListener('voiceschanged', check);
  }
})();
