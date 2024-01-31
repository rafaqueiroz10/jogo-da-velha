let audioInicial = new Audio("audios/audio-inicial.mp3"),
    clickNaCelula = new Audio ("audios/click-na-celula.mp3"),
    narracaoGolDaAlemanha = new Audio ("audios/narracao-gol-da-alemanha");

function recuperarVolume() {
    if (localStorage.getItem('volume-da-musica') !== null) {
        configuracoes.volume.musicaEl.value = localStorage.getItem('volume-da-musica');
        configuracoes.volume.musicaEl.value = parseFloat(configuracoes.volume.musicaEl.value);
        audioInicial.volume = configuracoes.volume.musicaEl.value / 100;
    }
    if (localStorage.getItem('som-click-na-celula') !== null) {
        configuracoes.volume.toqueEl.value = localStorage.getItem('som-click-na-celula');
        configuracoes.volume.toqueEl.value = parseFloat(configuracoes.volume.toqueEl.value);
        clickNaCelula.volume = configuracoes.volume.toqueEl.value / 100;
    }
}

botaoComecarEl.addEventListener('click', () => {
    if (!estaOculto(maisInformacoes.modalEl)) {
        return;
    }
    audioInicial.play();
    recuperarVolume();
});

botaoRecuperarProgressoEl.addEventListener('click', () => {
    audioInicial.pause();
});

function reproduzir(audio) {
    switch (audio) {
        case audioInicial:
            audio.currentTime = 0;
            audio.play();
            audio.addEventListener('ended', () => {
                audio.currentTime = 0;
                audio.play();
            });
            break;

        case clickNaCelula: 
            audio.addEventListener('ended', () => audio.pause()); 
            break;
        
        case narracaoGolDaAlemanha: {
            audio.currentTime = 0;
            audio.play();
        }
    }
}

for (let celulaEl of arrCelulasEl) {
    celulaEl.addEventListener('click', () => {
        if (temVencedor) {
            if ((vitoriasX === 1 && vitoriasBolinha === 7) || (vitoriasX === 7 || vitoriasBolinha === 1)) {
                reproduzir(narracaoGolDaAlemanha);
            }
        }
    });
}