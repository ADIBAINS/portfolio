(() => {
  const banner = document.querySelector('[data-banner]');
  const scenes = [...banner.querySelectorAll('[data-scene]')];
  const next = banner.querySelector('[data-banner-next]');
  const pause = banner.querySelector('[data-banner-pause]');
  const progress = banner.querySelector('[data-banner-progress]');
  const caption = banner.querySelector('[data-banner-caption]');
  const count = banner.querySelector('[data-banner-count]');
  const status = banner.querySelector('[data-banner-status]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const interval = 8000;
  let index = 0;
  let paused = false;
  let timer;
  let animation;

  function schedule() {
    clearTimeout(timer);
    animation?.cancel();
    pause.hidden = motion.matches;
    pause.dataset.paused = String(paused);
    pause.setAttribute('aria-label', paused ? 'Resume banner rotation' : 'Pause banner rotation');
    if (paused || motion.matches || document.hidden) return;

    animation = progress.animate(
      [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
      { duration: interval, fill: 'forwards' },
    );
    timer = setTimeout(advance, interval);
  }

  function advance(manual = false) {
    banner.querySelector('.is-previous')?.classList.remove('is-previous');
    scenes[index].classList.replace('is-current', 'is-previous');
    scenes[index].setAttribute('aria-hidden', 'true');
    index = (index + 1) % scenes.length;
    scenes[index].classList.add('is-current');
    if (scenes[index].querySelector('img')) scenes[index].setAttribute('aria-hidden', 'false');
    caption.textContent = scenes[index].dataset.scene;
    count.textContent = [index + 1, scenes.length]
      .map(number => String(number).padStart(2, '0'))
      .join(' / ');
    if (manual) status.textContent = `${caption.textContent}, ${count.textContent}`;
    schedule();
  }

  next.hidden = false;
  next.addEventListener('click', () => advance(true));
  pause.addEventListener('click', () => {
    paused = !paused;
    schedule();
  });
  motion.addEventListener('change', schedule);
  document.addEventListener('visibilitychange', schedule);
  schedule();
})();
