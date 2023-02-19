document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('header > a').addEventListener('click', () => {
    for (const notification of document.body.querySelectorAll('.space-y-2 > .bg-very-light-grayish-blue')) {
      notification.querySelector('.bg-custom-red').remove();
      notification.classList.remove('bg-very-light-grayish-blue');
    }
    document.querySelector('header > div > span').innerText = '0';
  });
});
