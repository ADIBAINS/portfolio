(() => {
  const system = matchMedia('(prefers-color-scheme: dark)');
  let choice;
  try {
    choice = localStorage.getItem('portfolio-theme');
  } catch {
    // The system preference still works when storage is unavailable.
  }

  const root = document.documentElement;
  const apply = () => {
    root.dataset.theme = choice ?? (system.matches ? 'dark' : 'light');
  };

  if (choice !== 'dark' && choice !== 'light') choice = undefined;
  apply();
  system.addEventListener('change', apply);

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('[data-theme-toggle]');
    const update = () => toggle.setAttribute('aria-pressed', root.dataset.theme === 'dark');
    update();
    system.addEventListener('change', update);
    toggle.hidden = false;

    toggle.addEventListener('click', () => {
      choice = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply();
      update();
      try {
        localStorage.setItem('portfolio-theme', choice);
      } catch {
        // Keep the choice for this page when storage is unavailable.
      }
    });
  });
})();
