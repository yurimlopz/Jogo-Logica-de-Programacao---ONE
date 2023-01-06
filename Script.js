
/* SELETORES */

let input = document.querySelector("#input");

let modalAlert = document.querySelector(".modal-alert");

const confirmaValorApostado = document.querySelector("#enviar");

let resultado = document.querySelector("#resultado");

let resultadoModal = document.querySelector(".resultado-modal");

let suaAposta = document.querySelector("#numero-apostado");

let resultadoSorteio = document.querySelector("#numero-sorteados");

/* OBJETO */

class alerta {

    constructor(div, conteudo, classe) {
        this.div = div;
        this.conteudo = conteudo;
        this.classe = classe;
    }

    ModalRegrasDoJogo() {

        let elemento = document.createElement(this.div);

        elemento.classList = this.classe;

        elemento.innerHTML = this.conteudo;

        modalAlert.appendChild(elemento);

    }
}

/* FUNÇÃO */

function sortear() {

    return parseInt(Math.round(Math.random() * 10));

}

function numerosSorteados(value) {

    let segredos = [];

    let numero = 1;

    while (numero <= value) {

        let numeroAleatorio = sortear();

        let condicao = false;

        if (numeroAleatorio !== 0) {

            for (let index = 0; index < segredos.length; index++)

                if (segredos[index] == numeroAleatorio) {

                    condicao = true;
                    break

                }

            if (condicao == false) {

                segredos.push(numeroAleatorio);

                numero++;

            }
        }
    }

    return segredos;
}

function checar() {

    resultadoModal.style.display = "flex";

    let segredos = numerosSorteados(5);

    let condicao = false;

    let valorInput = input.value;

    resultadoSorteio.textContent = "A SUA APOSTA FOI: " + valorInput;

    for (let i = 0; i < segredos.length; i++) {

        if (segredos[i] == valorInput) {
            resultado.textContent = "PARABÉNS VOCÊ ACERTOUU!!!";
            condicao = true;
            break
        }

    }

    if (condicao == false) {

        resultado.textContent = "INFELIZMENTE VOCÊ ERROU!";

    }

    input.value = ""
    input.focus()


}

function mostrarModal() {

    let container = document.querySelector(".container");

    container.style.opacity = "0.5";

    let h1 = new alerta("h1", "REGRAS DO JOGO!", "titulo-alerta");
    h1.ModalRegrasDoJogo();

    let p = new alerta("p", "O jogo vai sortear 6 numeros de 0 a 10 , para você se sair vitorioso tera que acertar pelo menos 1 deses numeros," + "<br><br>" + "BOA SORTE!", "conteudo-alerta");
    p.ModalRegrasDoJogo();

    let button = new alerta("button", "", "btn fechar-alerta fa-solid fa-thumbs-up");
    button.ModalRegrasDoJogo();

    return document.querySelectorAll("button")[0].addEventListener("click", () => {

        modalAlert.style.display = "none";
        
        container.style.opacity = "1";

        input.focus();

    })

}

/* EVENTOS */

confirmaValorApostado.addEventListener("click", checar);

window.addEventListener("load", mostrarModal)





