document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  themeSwitch.checked = '';
  themeSwitch.addEventListener('change', () => document.documentElement.classList.toggle('dark'));
});
