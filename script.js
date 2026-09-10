
function trocarCor() {
    document.body.classList.toggle("escuro");
}

function mostrarSecao (id) {
    document.getElementById("inicio").style.display = "none";
    
     const secoes = document.querySelectorAll(".section");

     secoes.forEach(function(secao) {
        secao.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
