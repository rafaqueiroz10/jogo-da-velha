let audioInicial = new Audio ("audios/audio-inicial.mp3"),
    clickNaCelula = new Audio ("audios/click-na-celula.mp3");

audioInicial.addEventListener ('ended', () => {
    audioInicial.currentTime = 0;
    audioInicial.play ();
});

clickNaCelula.addEventListener ('ended', () => {
    clickNaCelula.pause ();
});

function recuperarVolume () {
    if (localStorage.getItem ('volume-da-musica') !== null) {
        configuracoes.volume.musicaEl.value = localStorage.getItem ('volume-da-musica');
        configuracoes.volume.musicaEl.value = parseFloat (configuracoes.volume.musicaEl.value);
        audioInicial.volume = configuracoes.volume.musicaEl.value / 100;
    }
    if (localStorage.getItem ('som-click-na-celula') !== null) {
        configuracoes.volume.toqueEl.value = localStorage.getItem ('som-click-na-celula');
        configuracoes.volume.toqueEl.value = parseFloat (configuracoes.volume.toqueEl.value);
        clickNaCelula.volume = configuracoes.volume.toqueEl.value / 100;
    }
}

botaoComecarEl.addEventListener ('click', () => {
    audioInicial.play ();
    recuperarVolume ();
});

botaoRecuperarProgressoEl.addEventListener ('click', () => {
    audioInicial.pause ();
});