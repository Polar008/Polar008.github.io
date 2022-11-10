var frases = ["Ok ok, no me suspendas el link es : https://github.com/Polar008/UnrealEstrategia"]
var textBox = document.getElementById("box");

setTimeout(function(){
    textBox.style.display = "flex";
    write(frases[0]);
}, 10000);


function write(text){
    var writeOn = document.getElementById("conver");
    for (let i = 0; i < text.length; i++) {
        setTimeout(function(){
            writeOn.textContent += text[i];
        }, i*50);
    }
}