

const dmode = document.getElementById('dark');
const wmode = document.getElementById('white');

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}

wmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.body.style.fontFamily = 'Helvetic';
   
}

const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);
