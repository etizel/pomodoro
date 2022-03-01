var min = 0;
var seg = 0;
//var interval;



function start() {
 const interval = setInterval(counter, 1000);
 console.log("")
}


function stop() {
clearInterval(interval);
}

function counter() {
    seg++
    if(seg == 60) {
        min++
        seg=0
    }
    document.getElementById('counter').innerText = min + ':' + seg
}