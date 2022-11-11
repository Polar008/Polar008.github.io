var ct1=0;
var ct2=0;
var ct3=0;
var ct4=0;
var ct5=0;
var fontBig = 21;
var fontSaml = 21;
var textBox = document.getElementById("box");
var godActive = false;

function changetext1() {
    var texts = ["Cagaste weyyyyyyyyyy!","https://","Never gonna","Mamahuevo","Config","S"];
    var ele = document.getElementById("innerFText1");
    ele.textContent = texts[ct1]
    ct1++;
    if (ct1 >= texts.length){
        ct1 = 0;
    }
    check()
}

function changetext2() {
    var texts = ["github","Petanca","Covid","no Petanca","give","Content","P"];
    var ele = document.getElementById("innerFText2");
    ele.textContent = texts[ct2]
    ct2++;
    if (ct2 >= texts.length){
        ct2 = 0;
    }
    check()
}

function changetext3() {
    var texts = ["you up",".com/","que buscas","no hay nada mas si sigues clicando",".gitignore","I"];
    var ele = document.getElementById("innerFText3");
    ele.textContent = texts[ct3]
    ct3++;
    if (ct3 >= texts.length){
        ct3 = 0;
    }
    check()
}

function changetext4() {
    var texts = ["Hoy no es tu dia de suerte","o si","Never gonna","no no lo es","Polar008/","README.md","N"];
    var ele = document.getElementById("innerFText4");
    ele.textContent = texts[ct4]
    ct4++;
    if (ct4 >= texts.length){
        ct4 = 0;
    }
    check()
}

function changetext5() {
    var texts = ["Mamma mia","let you down","Pasta Ravioli","TowerDefence.uproject","UnrealEstrategia","ME"];
    var ele = document.getElementById("innerFText5");
    ele.textContent = texts[ct5]
    ct5++;
    if (ct5 >= texts.length){
        ct5 = 0;
    }
    check()
}


function check() {
    var ele1 = document.getElementById("innerFText1").textContent;
    var ele2 = document.getElementById("innerFText2").textContent;
    var ele3 = document.getElementById("innerFText3").textContent;
    var ele4 = document.getElementById("innerFText4").textContent;
    var ele5 = document.getElementById("innerFText5").textContent;

    if (ele1 == "Never gonna" && ele2 == "give" && ele3 == "you up" && ele4 == "Never gonna" && ele5 == "let you down") {
        location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    }else if (ele1 == "https://" && ele2 == "github" && ele3 == ".com/" && ele4 == "Polar008/" && ele5 == "UnrealEstrategia") {
        location.assign('https://github.com/Polar008/UnrealEstrategia')
    }else if (ele1 == "S" && ele2 == "P" && ele3 == "I" && ele4 == "N" && ele5 == "ME") {
        document.getElementById("fText1").classList.add("spin");
        document.getElementById("fText2").classList.add("spin");
        document.getElementById("fText3").classList.add("spin");
        document.getElementById("fText4").classList.add("spin");
        document.getElementById("fText5").classList.add("spin");
        if (!godActive) {
            godActive = true;
            textBox.style.display = "flex";
            textBox.classList.add("spin");
            write("Weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            setTimeout(function(){
                textBox.style.display = "none";
                document.getElementById("conver").textContent = "";
                godActive = false;
            }, 4000);
        }
    }
}

function codeClick() {
    if (!godActive) {
        godActive = true;
        var img = document.getElementById("code");
        img.classList.add("spin");
        textBox.style.display = "flex";
        write("Casi, pero no sera tan facil");
        setTimeout(function(){
            textBox.style.display = "none";
            document.getElementById("conver").textContent = "";
            godActive = false;
        }, 4000);
    }

}

function goToClick() {
    if (!godActive) {
        godActive = true;
        var img = document.getElementById("goTo");
        img.classList.add("goAway")
        textBox.style.display = "flex";
        write("I se fue a la puta");
        setTimeout(function(){
            textBox.style.display = "none";
            document.getElementById("conver").textContent = "";
            godActive = false;
        }, 4000);
    }
}

function masterClick() {
    var img = document.getElementById("master");
    img.classList.add("fadeAway")
}

function big() {
    var ele = document.getElementById("fText7");
    fontBig++;
    ele.style.fontSize = fontBig+"px";
}

function small() {
    var ele = document.getElementById("fText6");
    fontSaml-=1;
    ele.style.fontSize = fontSaml+"px";
}

function write(text){
    var writeOn = document.getElementById("conver");
    for (let i = 0; i < text.length; i++) {
        setTimeout(function(){
            writeOn.textContent += text[i];
        }, i*50);
    }
}