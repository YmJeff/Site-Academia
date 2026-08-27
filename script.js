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

