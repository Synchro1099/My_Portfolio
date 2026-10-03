// Controls the intro loader that public/index.html paints before the bundle runs.
// The inline script there adds `loader-active` to <html> on the first visit of a
// browser session; this module fades the loader out and removes it from the DOM.

const MIN_VISIBLE_MS = 400;
const MAX_WAIT_MS = 1500;
const FADE_MS = 400;
const REDUCED_FADE_MS = 150;
const SEEN_KEY = "jm-loader-seen";

let started = false;
let resolveGone;
const gone = new Promise((resolve) => {
  resolveGone = resolve;
});

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, Math.max(0, ms)));

const finish = () => {
  document.getElementById("app-loader")?.remove();
  document.documentElement.classList.remove("loader-active");
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch (e) {
    // Storage can be unavailable (private mode); the loader just shows again next load.
  }
  resolveGone();
};

// Resolves once the loader is gone (immediately if it was never shown).
export const whenLoaderGone = () => gone;

// Call once the app has mounted. Safe to call more than once.
export const hideLoader = () => {
  if (started) return;
  started = true;

  const loader = document.getElementById("app-loader");
  if (!loader || !document.documentElement.classList.contains("loader-active")) {
    finish();
    return;
  }

  // performance.now() counts from navigation start, which is when the loader first paints.
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, wait(MAX_WAIT_MS - performance.now())])
    .then(() => wait(MIN_VISIBLE_MS - performance.now()))
    .then(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fadeMs = reducedMotion ? REDUCED_FADE_MS : FADE_MS;
      loader.classList.add("is-leaving");
      // A timer rather than transitionend, so a skipped transition can't leave it stuck.
      return wait(fadeMs);
    })
    .then(finish, finish);
};
