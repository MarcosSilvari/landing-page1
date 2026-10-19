const CHAVE_TEMA = "tema-aurora";

function lerTemaSalvo() {
    try {
        return localStorage.getItem(CHAVE_TEMA);
    } catch (erro) {
        return null; 
    }
}

function salvarTema(tema) {
    try {
        localStorage.setItem(CHAVE_TEMA, tema);
    } catch (erro) {
    }
}

function temaInicial() {
    const salvo = lerTemaSalvo();
    if (salvo === "claro" || salvo === "escuro") {
        return salvo;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro";
}

function aplicarTema(tema) {
    document.documentElement.dataset.tema = tema; 

    const botao = document.getElementById("botao-tema");
    if (botao) {
        const escuro = tema === "escuro";
        botao.textContent = escuro ? "☀️" : "🌙";
        botao.setAttribute("aria-label", escuro ? "Mudar para o tema claro" : "Mudar para o tema escuro");
    }
}

aplicarTema(temaInicial());

document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botao-tema");
    aplicarTema(document.documentElement.dataset.tema); 

    if (!botao) {
        return;
    }

    botao.addEventListener("click", function () {
        const atual = document.documentElement.dataset.tema;
        const novo = atual === "escuro" ? "claro" : "escuro";
        aplicarTema(novo);
        salvarTema(novo);
    });
});