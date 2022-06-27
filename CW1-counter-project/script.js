const counter=document.getElementById("counter");
const decrementBtn=document.getElementById("decrease");
const incrementBtn=document.getElementById("increase");
const resetBtn=document.getElementById("reset");

let count=0;

incrementBtn.addEventListener('click',()=>{
    count++;
    counter.innerHTML=count;
})
decrementBtn.addEventListener('click',()=>{
    if (count>=1) {
    count--;
    counter.innerHTML=count;

    }
   
})
resetBtn.addEventListener('click',()=>{
    count=0;
    counter.innerHTML=count;
})
    
    
    