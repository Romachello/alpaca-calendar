const toggleButton = document.querySelector('.calendar__theme-toggle');

toggleButton.addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});
