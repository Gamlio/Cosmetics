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
//skincare
const steps = document.querySelectorAll('.step');
const contents = document.querySelectorAll('.content > div');

steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    // Ẩn tất cả nội dung
    contents.forEach(content => content.classList.remove('active'));

    // Hiển thị nội dung tương ứng với bước được click
    contents[index].classList.add('active');
  });
});

