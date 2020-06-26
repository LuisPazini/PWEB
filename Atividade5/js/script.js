var a = parseInt(prompt("Digite o primeiro valor:"));
var b = parseInt(prompt("Digite o segundo valor:"));
var c = parseInt(prompt("Digite o terceiro valor:"));

var maior = (a,b,c) => Math.max(a,b,c);

alert("O maior valor é:" + maior(a,b,c));