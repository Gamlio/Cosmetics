const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
//fblink
const facebookLink = document.querySelector('a[href="https://www.facebook.com/AlYT.XD"]');

facebookLink.addEventListener('click', (event) => {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

  window.open('https://www.facebook.com/AlYT.XD', '_blank');
});