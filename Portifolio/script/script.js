var frentePortifolio = document.getElementsByClassName("portifolio-frente")[0];
var versoPortifolio = document.getElementsByClassName("portifolio-verso")[0];

function verVersoDireira(){
    frentePortifolio.style.transform = "rotateY(180deg)";
    versoPortifolio.style.transform = "rotateY(360deg)";
}

function verVersoEsquerda(){
    frentePortifolio.style.transform = "rotateY(0deg)";
    versoPortifolio.style.transform = "rotateY(180deg)";
}