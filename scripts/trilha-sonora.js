let audioInicial = new Audio("audios/audio-inicial.mp3");

audioInicial.addEventListener('ended', () => {
    audioInicial.currentTime = 0;
    audioInicial.play();
});

/*
clickNaCelula.addEventListener ('ended', () => {
    clickNaCelula.pause ();
});
*/
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

function reproduzir(arquivoMp3) {
    let audio = new Audio("audios/" + arquivoMp3);

    switch (arquivoMp3) {
        case "gol-do-barcelona.mp3":
            audio.addEventListener('canplay', () => {
                audio.currentTime = 4;
            });

            audio.addEventListener('timeupdate', () => {
                // Use uma comparação com margem de erro
                if (Math.abs(audio.currentTime - 22) < 0.1) {
                    audio.pause();
                }
            });
            break;

        default: {
            audio.currentTime = 0;
            audio.play();
        }
    }   

    /* 
    if (arquivoMp3 === "gol-do-barcelona.mp3") {
        audio.addEventListener('canplay', () => {
            audio.currentTime = 4;
        });

        audio.addEventListener('timeupdate', () => {
            // Use uma comparação com margem de erro
            if (Math.abs(audio.currentTime - 22) < 0.1) {
                audio.pause();
            }
        });
    }
    else {
        audio.currentTime = 0;
        audio.play();
    } */
}