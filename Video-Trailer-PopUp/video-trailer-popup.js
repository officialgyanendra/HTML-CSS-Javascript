const watchBtn = document.querySelector('.js-btn');
const closeBtn = document.querySelector('.js-close-icon');
const tailerContainer = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');
watchBtn.addEventListener('click', ()=>{
    tailerContainer.classList.remove('active');
})
closeBtn.addEventListener('click', ()=>{
    tailerContainer.classList.add('active');
    videoEl.pause();
    videoEl.currentTime = 0;
})
