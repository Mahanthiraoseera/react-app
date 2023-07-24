const counterValue = document.getElementById('counterValue');
var curValue= 0;

var decrementBtn=document.getElementById('decrementBtn')
var incrementBtn=document.getElementById('incrementBtn')
var resetBtn =document.getElementById('resetBtn');

decrementBtn.addEventListener('click', ()=>{
    curValue=curValue-1
    counterValue.innerHTML = curValue;
})

incrementBtn.addEventListener('click', ()=>{
    curValue= curValue+1;
    counterValue.innerHTML= curValue;
})

resetBtn.addEventListener('click', ()=>{
    counterValue.innerHTML= 0;
})

