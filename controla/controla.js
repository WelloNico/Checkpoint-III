let controlador = 0;
let numero = document.getElementById("numero");

function atualizarTela() {
    numero.innerText = controlador; // melhor, pra não repetir em todos os botões a propria função já checa o numero    

    if (controlador > 0) {
        numero.style.color = "blue";
    } else if (controlador < 0) {
        numero.style.color = "red";
    } else {
        numero.style.color = "black";
    }
}


let botao1 = document.getElementById("butun1");
botao1.addEventListener("click", function(){
    controlador ++
    atualizarTela();
});

let botao2 = document.getElementById("butun2");
botao2.addEventListener("click", function(){
    controlador --
    atualizarTela();
});


let botao3 = document.getElementById("butun3");
botao3.addEventListener("click", function(){
    controlador = 0
    atualizarTela();
});