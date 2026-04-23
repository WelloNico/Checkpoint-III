let form = document.getElementById("meuFormulario");

form.addEventListener("submit", function(event) {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;

    let erro = false;

    // Validação nome
    if (nome === "") {
        alert("O nome não pode estar vazio");
        erro = true;
    }

    // Validação email
    if (!email.includes("@")) {
        alert("O email deve conter '@'");
        erro = true;
    }

    // Validação idade
    if (idade <= 17) {
        alert("A idade deve ser maior que 18");
        erro = true;
    }

    // Impede envio se tiver erro
    if (erro) {
        event.preventDefault();
    }
});