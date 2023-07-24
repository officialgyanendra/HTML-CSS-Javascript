const backgroundEl = document.getElementById('bg-img');
const mainContentEl = document.querySelector('.content');

window.addEventListener('scroll',()=>{
  updateBackgroundImg();
});

function updateBackgroundImg (){
  backgroundEl.style.opacity = 1 - window.pageYOffset / 900;
  backgroundEl.style.backgroundSize = 160 - window.pageYOffset /12 + "%"
}