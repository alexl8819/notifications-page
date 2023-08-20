document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('header > a').addEventListener('click', (e) => {
    e.preventDefault();
    
    for (const notification of document.body.querySelectorAll('.space-y-2 > .transition')) {
      const notificationDot = notification.querySelector('.bg-custom-red');
      if (notificationDot) {
        notificationDot.remove();
      }
      notification.classList.remove('dark:bg-blue-950');
      notification.classList.remove('bg-very-light-grayish-blue');
    }
    document.querySelector('header > div > span').innerText = '0';
  });
});
