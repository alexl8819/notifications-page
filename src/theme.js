document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  themeSwitch.checked = '';
  themeSwitch.addEventListener('change', () => {
    const themeIcon = document.querySelector('#theme-switch + label > i');
    themeIcon.classList.toggle('fa-regular');
    themeIcon.classList.toggle('fa-solid');
    document.documentElement.classList.toggle('dark')
  });
});
