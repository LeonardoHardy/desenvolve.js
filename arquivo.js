const on = document.getElementById('on');
const off = document.getElementById('off');
const lampada = document.getElementById('lampada');

function islampadaquebrada(){

}

function lampadaon (){
    
    lampada.src = './img/ligada.jpg';
}

function lampadaoff (){
    lampada.src = './img/desligada.jpg';
}

function lampadaquebra (){
    lampada.src = './img/quebrada.jpg';
}

on.addEventListener('click', lampadaon);
off.addEventListener('click', lampadaoff);
lampada.addEventListener('click', lampadaquebra);
lampada.addEventListener('mouseover', lampadaon);  
lampada.addEventListener('mouseleave', lampadaoff);

