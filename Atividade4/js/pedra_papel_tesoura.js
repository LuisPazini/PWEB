var escolhaUsuario = prompt("Pedra, Papel ou Tesoura?").toLowerCase();

var escolhaComputador = function(){
    var numero = Math.random().toFixed(2);

    if(numero < 0.33){
        return "Pedra";
    }else if(numero < 0.66){
        return "Papel";
    }else{
        return "Tesoura";
    }
}();

alert("Escolha do computador: " + escolhaComputador.toUpperCase());

escolhaComputador = escolhaComputador.toLowerCase();
alert(function(){
    if((escolhaUsuario == "papel" && escolhaComputador == "pedra")
    ||(escolhaUsuario == "tesoura" && escolhaComputador == "papel")
    ||(escolhaUsuario == "pedra" && escolhaComputador == "tesoura")){
        return "Você venceu!";
    }else if((escolhaUsuario == "pedra" && escolhaComputador == "papel")
    ||(escolhaUsuario == "papel" && escolhaComputador == "tesoura")
    ||(escolhaUsuario == "tesoura" && escolhaComputador == "pedra")){
        return "Você perdeu...";
    }else{
        return "Empate!";
    }
}());