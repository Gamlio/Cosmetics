const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', () => {
  window.history.back();
});
//fblink
const facebookLink = document.querySelector('a[href="https://www.facebook.com/AlYT.XD"]');

facebookLink.addEventListener('click', (event) => {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

  window.open('https://www.facebook.com/AlYT.XD', '_blank');
});

