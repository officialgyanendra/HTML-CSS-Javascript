

let count = 0;
let intervalId ;
function start() {
    count++;
    document.querySelector('.watch').innerHTML = `<p>${count}<p>`;
}

 document.querySelector('.js-start-btn').addEventListener('click', ()=>{
    intervalId = setInterval(start,1000)
 })

 document.querySelector('.js-stop-btn').addEventListener('click', ()=>{
    clearInterval(intervalId);
 })

 document.querySelector('.js-reset-btn').addEventListener('click', ()=>{
    count=0;
    document.querySelector('.watch').innerHTML = `<p>${count}<p>`;
 })
let checboxElement = document.querySelector('.js-checkbox');
console.log(checboxElement.value);