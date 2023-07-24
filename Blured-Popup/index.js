const container = document.querySelector('.container');
const join = document.querySelector('.join-btn');
const blurPopup = document.querySelector('.popUp-container');
const close = document.querySelector('.close-icon');

join.addEventListener('click',()=>{
  container.classList.add('active');
  blurPopup.classList.remove('active');
})

close.addEventListener('click', ()=>{
  container.classList.remove('active');
  blurPopup.classList.add('active');
})
