

function validar(){
    if(document.formulario1.elements['p-vez-sim'].checked){
        alert("Que bom que você voltou a esta página!");
    }else if(document.formulario1.elements['p-vez-nao'].checked){
        alert("Volte sempre a esta página!");
    }
}