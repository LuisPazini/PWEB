
function confirma(){
    if(confirm("Deseja ser redirecionado para a página do curso selecionado?")){
        if(document.getElementById("cursos").value == "ADS"){
            window.open("cursos/ads.html");
        }else if(document.getElementById("cursos").value == "polimeros"){
            window.open("cursos/polimeros.html");
        }else if(document.getElementById("cursos").value == "mecanica-materiais"){
            window.open("cursos/manufatura.html");
        }else if(document.getElementById("cursos").value == "projetos-mecanicos"){
            window.open("cursos/prjmecanicos.html");
        }
    }
}