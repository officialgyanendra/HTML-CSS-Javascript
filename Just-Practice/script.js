const hourE = document.getElementById('h');
const minE = document.getElementById('m');
const secE = document.getElementById('s');
const ampm = document.querySelector('.ampm');

function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h>12){
        h -= 12;
        amp = "PM";
    }

    h= h<10 ? '0'+h : h;
    m= m<10 ? '0'+m : m;
    s= s<10 ? '0'+s : s;

    hourE.innerText = h;
    minE.innerText = m;
    secE.innerText = s;
    ampm.innerText = amp;
    setTimeout(()=>{
        clock();
    },1000)
}
clock();
