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
//chat bot
const messageInput = document.querySelector(".message-input");
const handleOutgoingMessage=(UserMessage)=>{

}

messageInput.addEventListener("Keydown",(e)=> {
  const UserMessage = e.target.value.trim();
  if(e.key==="Enter" && UserMessage){
    console.log(UserMessage)
  }
})