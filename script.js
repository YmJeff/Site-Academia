const elementos = document.querySelectorAll(".reveal");

function revelarElementos() {
    elementos.forEach((elemento) => {

        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revelarElementos);

revelarElementos();

/* MENSAGEM PARA WHATSAPP */
const formulario = document.getElementById("formContato");
const mensagemErro = document.getElementById("mensagemErro");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        mensagemErro.textContent = "Digite um e-mail válido.";
        return;
    }

    mensagemErro.textContent = "";
    
    const texto = 
        `Olá! Meu nome é ${nome}. ` +
        `Meu e-mail é ${email}.%0A` +
        `${mensagem}`;

    const numero = "5581999659504";

const url = `https://wa.me/${numero}?text=${texto}`;

window.open(url, "_blank");


});