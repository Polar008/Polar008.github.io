var frases = ["Hola, bienvenido a buscando el link de la entrega de mi proyecto de git. Si no estás por tonterias elige shortWay si te sobra tiempo elige longWay.","Guarra","Puta"]
var textBox = document.getElementById("box");

setTimeout(function(){
    textBox.style.display = "flex";
    write(frases[0]);
}, 1000);


function write(text){
    var writeOn = document.getElementById("conver");
    for (let i = 0; i < text.length; i++) {
        setTimeout(function(){
            writeOn.textContent += text[i];
        }, i*50);
    }
}