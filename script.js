let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let display = document.getElementById("display");
var interval = null;
var total = 0;
const Timer = ()=>{
    // total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
    total--;

    if(total >= 0){
        var hr = Math.floor(total / 3600);
        var min = Math.floor((total/60) - (hr*60));
        var sec = total - ((hr * 3600) + (min * 60));
        hour.value = hr;
        minute.value = min;
        second.value = sec;
    }
     else{
         clearInterval(interval);
        display.innerText = "Time Over!"  
   }
}
start.addEventListener('click',()=>{  
    let h = parseInt(hour.value) || 0;
    let m = parseInt(minute.value) || 0;
    let s = parseInt(second.value) || 0;
    total = h * 3600 + m * 60 + s;
    if (total <= 0) {
        alert ("Please enter a valid (non-zero) time!");
        return;
    }
    clearInterval(interval);
    interval = setInterval(Timer,1000);
    hour.disabled = true;
    minute.disabled = true;
    second.disabled = true;
    display.innerText = "Timer Started!";
    pause.disabled = false;
    reset.disabled = false;
      
})
pause.addEventListener('click',()=>{
    clearInterval(interval);
    display.innerText="Time paused";
})
reset.addEventListener('click', ()=>{
    clearInterval(interval);
    hour.disabled = false;
    minute.disabled = false;
    second.disabled = false;
    let h = parseInt(hour.value) || 0;
    let m = parseInt(minute.value) || 0;
    let s = parseInt(second.value) || 0;
    total = h * 3600 + m * 60 + s;
    display.innerText = "Reset";
})

