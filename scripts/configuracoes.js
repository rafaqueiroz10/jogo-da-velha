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

configuracoes.modalEl.classList.add ('ocultar');
configuracoes.botaoAbrirEl.classList.add ('hidden');

configuracoes.botaoAbrirEl.addEventListener ('click', () => {
    abrirModal (configuracoes.modalEl);
});

function salvarVolume () {
    if (localStorage.getItem ('volume-da-musica') !== null) {
        localStorage.removeItem ('volume-da-musica');
    }
    localStorage.setItem ('volume-da-musica', `${audioInicial.volume * 100}`);

    if (localStorage.getItem ('som-click-na-celula') !== null) {
        localStorage.removeItem ('som-click-na-celula');
    }
    localStorage.setItem ('som-click-na-celula', `${clickNaCelula.volume * 100}`);
}

configuracoes.botaoFecharEl.addEventListener ('click', () => {
    fecharModal (configuracoes.modalEl);
    salvarVolume ();
});

configuracoes.volume.musicaEl.addEventListener ('input', () => {
    audioInicial.volume = configuracoes.volume.musicaEl.value / 100;
});

configuracoes.volume.toqueEl.addEventListener ('input', () => {
    clickNaCelula.volume = configuracoes.volume.toqueEl.value / 100;
});