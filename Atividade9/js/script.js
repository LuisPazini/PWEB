var texto = document.getElementById("text");
var cbxCapital = document.getElementById("capital");
var cbxSmall = document.getElementById("small");


function textChange(){
    if(cbxCapital.checked){
        texto.value = texto.value.toUpperCase();
    }else if(cbxSmall.checked){
        texto.value = texto.value.toLowerCase();
    }
}