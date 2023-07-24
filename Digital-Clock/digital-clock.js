const hourE = document.querySelector('#h');
const mimutE = document.querySelector('#m');
const secE = document.querySelector('#s');
let ampm = document.querySelector('.ampm')

function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h>12){
        h -= 12; 
        ap = 'PM' ;
    }

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

    hourE.innerText = h;
    mimutE.innerText = m;
    secE.innerText = s;
    ampm.innerText = ap;
    setTimeout(() => {
        clock();
    }, 1000);
}
clock();