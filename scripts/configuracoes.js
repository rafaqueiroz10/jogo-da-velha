let mainPrincipalEl = document.querySelector ('main.conteudo-principal');

let configuracoes = {
    modalEl: document.querySelector ('.modal-configuracoes'),
    botaoAbrirEl: document.querySelector ('#link-configuracoes'),
    botaoFecharEl: document.querySelector ('#fechar-configuracoes'),
    volume: {
        musicaEl: document.querySelector ('#volume-da-musica'),
        toqueEl: document.querySelector ('#volume-toque')
    }
};

configuracoes.botaoAbrirEl.addEventListener ('click', () => {
    if (!estaOculto (jogoEl)) {
        jogoEl.classList.add ('esconder-na-capa');
    }
    else if (!estaOculto (modalVsAmigoEl)) {
        modalVsAmigoEl.classList.add ('esconder-na-capa');
    }
    else if (!estaOculto (modalRecuperarProgressoEl)) {
        modalRecuperarProgressoEl.classList.add ('esconder-na-capa');
    }

    configuracoes.modalEl.classList.remove ('ocultar');
    configuracoes.modalEl.classList.add ('transicao-abrir-modal');
    mainPrincipalEl.classList.add ('capa-escura-modal');
});

configuracoes.botaoFecharEl.addEventListener ('click', () => {
    if (!estaOculto (modalVsAmigoEl)) {
        modalVsAmigoEl.classList.remove ('esconder-na-capa');
    }
    else if (!estaOculto (jogoEl)) {
        jogoEl.classList.remove ('esconder-na-capa');
    }
    else if (!estaOculto (modalRecuperarProgressoEl)) {
        modalRecuperarProgressoEl.classList.remove ('esconder-na-capa');
    } 
    configuracoes.modalEl.classList.add ('ocultar');
    configuracoes.modalEl.classList.remove ('transicao-abrir-modal');
    mainPrincipalEl.classList.remove ('capa-escura-modal');

    if (localStorage.getItem ('volume-da-musica') !== null) {
        localStorage.removeItem ('volume-da-musica');
    }
    localStorage.setItem ('volume-da-musica', `${audioInicial.volume * 100}`);

    if (localStorage.getItem ('som-click-na-celula') !== null) {
        localStorage.removeItem ('som-click-na-celula');
    }
    localStorage.setItem ('som-click-na-celula', `${clickNaCelula.volume * 100}`);
});

configuracoes.volume.musicaEl.addEventListener ('input', () => {
    audioInicial.volume = configuracoes.volume.musicaEl.value / 100;
});

configuracoes.volume.toqueEl.addEventListener ('input', () => {
    clickNaCelula.volume = configuracoes.volume.toqueEl.value / 100;
});