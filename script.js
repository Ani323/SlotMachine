let value1 =document.getElementById('value1');
let value2 =document.getElementById('value2');
let value3 =document.getElementById('value3');
let inputSpeed =document.getElementById('inputSpeed');
let stop = document.getElementById('stop');

let values =[
    '😊','😍','🤣','😒','🤔','🥰','😛'
]

function getRandomValue() {
    return values[Math.floor(Math.random()*7)]
}

let animationId;
function updateAnimation(newspeed){
    if(animationId) clearInterval(animationId)

    animationId =  setInterval(() =>{
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    
    },1000/newspeed)
    
}
stop.onclick = function(){
    if(value1==value2==value3){
        alert("you win");
    }else{
        alert("Try again")
    }
}

inputSpeed.onchange = function(ev){
    // document.documentElement =>this is :root of CSS
    document.documentElement.style.setProperty('--speed',ev.target.value)
    updateAnimation(ev.target.value)
}