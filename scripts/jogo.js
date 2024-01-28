let inicioDoJogoEl = document.querySelector('.comecar-jogo'),
    botaoComecarEl = document.querySelector('button#comecar'),
    jogoEl = document.querySelector('.jogo'),
    modalVsAmigoEl = document.querySelector('.modal-vs-amigo'),
    botaoJogarVsAmigoEl = document.querySelector('#jogar-vs-amigo'),
    modalRecuperarProgressoEl = document.querySelector('.modal-recuperar-progresso'),
    nomeJogadorUmEl = document.querySelector('#nome-jogador-um'),
    nomeJogadorDoisEl = document.querySelector('#nome-jogador-dois'),
    linkAutoresEl = document.querySelector('#link-autores'),
    opcaoBolinhaJogadorUmEl = document.querySelector('#jogador-um .bolinha'),
    opcaoBolinhaJogadorDoisEl = document.querySelector('#jogador-dois .bolinha'),
    opcaoXJogadorUmEl = document.querySelector('#jogador-um .x'),
    opcaoXJogadorDoisEl = document.querySelector('#jogador-dois .x'),
    nomeEscolheuXEl = document.querySelector('#nome-x'),
    nomeEscolheuBolinhaEl = document.querySelector('#nome-bolinha'),
    botaoRecuperarProgressoEl = document.querySelector('#botao-recuperar-progresso'),
    botaoNaoRecuperarProgressoEl = document.querySelector('#nao-recuperar-progresso'),
    arrCelulasEl = document.querySelectorAll('.linha div'),
    modalContinuarOuSairDoJogoEl = document.querySelector('.modal-continuar-ou-sair-do-jogo'),
    vitoriasBolinhaEl = document.querySelector('#vitorias-bolinha'),
    vitoriasXEl = document.querySelector('#vitorias-x'),
    divBolinhaEl = document.querySelector('.bolinha'),
    divXEl = document.querySelector('.x'),
    botaoContinuarJogoEl = document.querySelector('#continuar-jogo'),
    modalSalvarOuDescartarProgressoEl = document.querySelector('.modal-salvar-ou-descartar-progresso'),
    botaoSairDoJogoEl = document.querySelector('#sair-do-jogo'),
    botaoExcluirProgressoEl = document.querySelector('#excluir-progresso'),
    botaoSalvarProgressoEl = document.querySelector('#salvar-progresso'),
    secoesDaPaginaEl = document.querySelectorAll('section');

jogoEl.classList.add('ocultar');
for (let i = 2; i < secoesDaPaginaEl.length; i++) {
    secoesDaPaginaEl[i].classList.add('ocultar');
    secoesDaPaginaEl[i].classList.add('transicao-abrir-modal');
}

botaoComecarEl.addEventListener('click', () => {
    if (!estaOculto (maisInformacoes.modalEl)) {
        return;
    }
    inicioDoJogoEl.classList.add('ocultar');
    if (localStorage.getItem('partida') !== null) {
        modalRecuperarProgressoEl.classList.remove('ocultar');
    }
    else {
        modalVsAmigoEl.classList.remove('ocultar');
    }
    configuracoes.botaoAbrirEl.classList.remove('hidden');
});

opcaoBolinhaJogadorUmEl.addEventListener('click', () => {
    opcaoBolinhaJogadorUmEl.classList.add('marcar-opcao');
    opcaoXJogadorUmEl.classList.remove('marcar-opcao');
});

opcaoBolinhaJogadorDoisEl.addEventListener('click', () => {
    opcaoBolinhaJogadorDoisEl.classList.add('marcar-opcao');
    opcaoXJogadorDoisEl.classList.remove('marcar-opcao');
});

opcaoXJogadorUmEl.addEventListener('click', () => {
    opcaoXJogadorUmEl.classList.add('marcar-opcao');
    opcaoBolinhaJogadorUmEl.classList.remove('marcar-opcao');
});

opcaoXJogadorDoisEl.addEventListener('click', () => {
    opcaoXJogadorDoisEl.classList.add('marcar-opcao');
    opcaoBolinhaJogadorDoisEl.classList.remove('marcar-opcao');
});

function marcada(opcaoEl) {
    return (opcaoEl.classList.contains('marcar-opcao'));
}

function estaOculto(modalEl) {
    return (modalEl.classList.contains('ocultar'));
}

function carregarNomesNaPartida() {
    if (marcada(opcaoXJogadorDoisEl)) {
        nomeEscolheuXEl.innerHTML = nomeJogadorDoisEl.value;
    }
    else {
        nomeEscolheuBolinhaEl.innerHTML = nomeJogadorDoisEl.value;
    }

    if (marcada(opcaoBolinhaJogadorUmEl)) {
        nomeEscolheuBolinhaEl.innerHTML = nomeJogadorUmEl.value;
    }
    else {
        nomeEscolheuXEl.innerHTML = nomeJogadorUmEl.value;
    }
    nomeJogadorUmEl.value = nomeJogadorDoisEl.value = '';
}

function desmarcarOpcoes() {
    opcaoBolinhaJogadorDoisEl.classList.remove('marcar-opcao');
    opcaoXJogadorDoisEl.classList.remove('marcar-opcao');
    opcaoXJogadorUmEl.classList.remove('marcar-opcao');
    opcaoBolinhaJogadorUmEl.classList.remove('marcar-opcao');
}

function marcaVezDoPrimeiroAJogar () {
    if (primeiroAComecar === 'O') {
        nomeEscolheuBolinhaEl.classList.add('marcar-vez');
        divBolinhaEl.classList.add('marcar-vez');
    }
    else {
        nomeEscolheuXEl.classList.add('marcar-vez');
        divXEl.classList.add('marcar-vez');
    }
}

botaoJogarVsAmigoEl.addEventListener('click', () => {
    if (!marcada(opcaoBolinhaJogadorUmEl) && !marcada(opcaoXJogadorUmEl) ||
        !marcada(opcaoXJogadorDoisEl) && !marcada(opcaoBolinhaJogadorDoisEl) ||
        marcada(opcaoXJogadorUmEl) && marcada(opcaoXJogadorDoisEl) ||
        marcada(opcaoBolinhaJogadorUmEl) && marcada(opcaoBolinhaJogadorDoisEl)) {
        return;
    }
    audioInicial.pause();
    modalVsAmigoEl.classList.add('ocultar');
    jogoEl.classList.remove('ocultar');
    carregarNomesNaPartida();
    desmarcarOpcoes();
    marcaVezDoPrimeiroAJogar ();
});

function restauraPartidaSalva(jogo) {
    vitoriasBolinhaEl.innerHTML = vitoriasBolinha = jogo.vitoriasBolinha;
    vitoriasXEl.innerHTML = vitoriasX = jogo.vitoriasX;
    primeiroAComecar = alternar(jogo.ultimoQueComecou);
    vez = primeiroAComecar;
    nomeEscolheuBolinhaEl.innerHTML = jogo.nomeEscolheuBolinha;
    nomeEscolheuXEl.innerHTML = jogo.nomeEscolheuX;
}

botaoRecuperarProgressoEl.addEventListener('click', () => {
    modalRecuperarProgressoEl.classList.add('ocultar');
    jogoEl.classList.remove('ocultar');
    let partida = JSON.parse(localStorage.getItem('partida'));
    restauraPartidaSalva(partida);
});

botaoNaoRecuperarProgressoEl.addEventListener('click', () => {
    modalRecuperarProgressoEl.classList.add('ocultar');
    modalVsAmigoEl.classList.remove('ocultar');
    localStorage.removeItem('partida');
});

function criarMatrizDeCelulas() {
    let tabuleiro = [[, , ,], [, , ,], [, , ,]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tabuleiro[i][j] = arrCelulasEl[(i * 3) + j];
        }
    }
    return tabuleiro;
}

let tabuleiro = criarMatrizDeCelulas();

function verificarLinhas() {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0].innerHTML === vez && tabuleiro[i][1].innerHTML === vez && tabuleiro[i][2].innerHTML === vez) {
            tabuleiro[i][0].classList.add('expandir-retrair');
            tabuleiro[i][1].classList.add('expandir-retrair');
            tabuleiro[i][2].classList.add('expandir-retrair');
            temTransicaoEmAndamento = true;
            return true;
        }
    }
    return false;
}

function verificarColunas() {
    for (let j = 0; j < 3; j++) {
        if (tabuleiro[0][j].innerHTML === vez && tabuleiro[1][j].innerHTML === vez && tabuleiro[2][j].innerHTML === vez) {
            tabuleiro[0][j].classList.add('expandir-retrair');
            tabuleiro[1][j].classList.add('expandir-retrair');
            tabuleiro[2][j].classList.add('expandir-retrair');
            temTransicaoEmAndamento = true;
            return true;
        }
    }
    return false;
}

function verificarDiagonais() {
    if (tabuleiro[0][0].innerHTML === vez && tabuleiro[1][1].innerHTML === vez && tabuleiro[2][2].innerHTML === vez) {
        tabuleiro[0][0].classList.add('expandir-retrair');
        tabuleiro[1][1].classList.add('expandir-retrair');
        tabuleiro[2][2].classList.add('expandir-retrair');
        temTransicaoEmAndamento = true;
        return true;
    }
    if (tabuleiro[0][2].innerHTML === vez && tabuleiro[1][1].innerHTML === vez && tabuleiro[2][0].innerHTML === vez) {
        tabuleiro[0][2].classList.add('expandir-retrair');
        tabuleiro[1][1].classList.add('expandir-retrair');
        tabuleiro[2][0].classList.add('expandir-retrair');
        temTransicaoEmAndamento = true;
        return true;
    }
    return false;
}

function alternar(peca) {
    if (peca === 'O') {
        peca = 'X';
        nomeEscolheuXEl.classList.add('marcar-vez');
        divXEl.classList.add('marcar-vez');
        divBolinhaEl.classList.remove('marcar-vez');
        nomeEscolheuBolinhaEl.classList.remove('marcar-vez');
    }
    else {
        peca = 'O';
        nomeEscolheuBolinhaEl.classList.add('marcar-vez');
        divBolinhaEl.classList.add('marcar-vez');
        divXEl.classList.remove('marcar-vez');
        nomeEscolheuXEl.classList.remove('marcar-vez');
    }
    return peca;
}

// função para sortear quem começa o jogo pela primeira vez (caso o usuário não tenha salvo o jogo)
function sortearPrimeiroAComecar() {
    let numero = Math.random();
    let primeiroComecar;
    primeiroComecar = (numero <= 0.5) ? 'O' : 'X';
    return primeiroComecar;
}

function empate() {
    for (let celulaEl of arrCelulasEl) {
        if (celulaEl.innerHTML === '') {
            return false;
        }
    }
    return true;
}

function contarVitoria(pecaVencedora) {
    if (pecaVencedora === 'O') {
        vitoriasBolinha++;
        vitoriasBolinhaEl.innerHTML = vitoriasBolinha;
    }
    else {
        vitoriasX++;
        vitoriasXEl.innerHTML = vitoriasX;
    }
}

function limparCelulas() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tabuleiro[i][j].innerHTML = '';
            tabuleiro[i][j].classList.remove('expandir-retrair');
            tabuleiro[i][j].style.cursor = 'pointer';
        }
    }
    contJogadas = 0;
}

function desmarcarVez() {
    divBolinhaEl.classList.remove('marcar-vez');
    divXEl.classList.remove('marcar-vez');
    nomeEscolheuBolinhaEl.classList.remove('marcar-vez');
    nomeEscolheuXEl.classList.remove('marcar-vez');
}

let vez, primeiroAComecar = sortearPrimeiroAComecar();
let contJogadas = 0;
vez = primeiroAComecar;
let vitoriasBolinha = 0, vitoriasX = 0;
let temVencedor;

for (let celulaEl of arrCelulasEl) {
    celulaEl.addEventListener('click', (e) => {
        let celulaRecuperadaEl = e.currentTarget;

        if (celulaRecuperadaEl.innerHTML !== '' || temVencedor || !estaOculto(configuracoes.modalEl)
            || mainPrincipalEl.classList.contains('capa-escura-modal')) {
            return;
        }

        clickNaCelula.currentTime = 0;
        clickNaCelula.play();

        contJogadas++;

        celulaRecuperadaEl.innerHTML = vez;

        celulaRecuperadaEl.style.color = (vez === 'O') ? 'red' : '#5e17eb';

        if (contJogadas < 5) {
            vez = alternar(vez);
            return;
        }

        temVencedor = (verificarLinhas() || verificarColunas() || verificarDiagonais());
        let tempoDeAtraso;
        if (temVencedor || empate()) {
            if (temVencedor) {
                let vencedor = vez;
                contarVitoria(vencedor);
            }
            tempoDeAtraso = (temVencedor) ? 5000 : 50;
            configuracoes.botaoAbrirEl.classList.add('hidden');
            maisInformacoes.linkEl.classList.add('hidden');
            setTimeout(() => {
                for (let celulaEl of arrCelulasEl) {
                    celulaEl.style.cursor = 'auto';
                }
                mainPrincipalEl.classList.add('capa-escura-modal');
                jogoEl.classList.add('esconder-na-capa');
                modalContinuarOuSairDoJogoEl.classList.remove('ocultar');
                desmarcarVez();
            }, tempoDeAtraso);
        }
        else {
            vez = alternar(vez);
        }
    });
}

botaoContinuarJogoEl.addEventListener('click', () => {
    modalContinuarOuSairDoJogoEl.classList.add('ocultar');
    mainPrincipalEl.classList.remove('capa-escura-modal');
    jogoEl.classList.remove('esconder-na-capa');
    limparCelulas();
    configuracoes.botaoAbrirEl.classList.remove('hidden');
    maisInformacoes.linkEl.classList.remove('hidden');
    temVencedor = false;
    primeiroAComecar = alternar(primeiroAComecar);
    vez = primeiroAComecar;
});

botaoSairDoJogoEl.addEventListener('click', () => {
    modalContinuarOuSairDoJogoEl.classList.add('ocultar');
    modalSalvarOuDescartarProgressoEl.classList.remove('ocultar');
    jogoEl.classList.add('ocultar');
    limparCelulas();
    temVencedor = false;
});

function salvarPartida() {
    let partida = {
        nomeEscolheuBolinha: nomeEscolheuBolinhaEl.innerHTML,
        nomeEscolheuX: nomeEscolheuXEl.innerHTML,
        vitoriasBolinha: vitoriasBolinhaEl.innerHTML,
        vitoriasX: vitoriasXEl.innerHTML,
        ultimoQueComecou: primeiroAComecar
    };

    localStorage.setItem('partida', JSON.stringify(partida));
}

function zerarPartida() {
    modalSalvarOuDescartarProgressoEl.classList.add('ocultar');
    mainPrincipalEl.classList.remove('capa-escura-modal');
    jogoEl.classList.remove('esconder-na-capa');
    vitoriasBolinhaEl.innerHTML = vitoriasXEl.innerHTML = 0;
    vitoriasBolinha = vitoriasX = 0;
    nomeEscolheuBolinhaEl.innerHTML = nomeEscolheuXEl.innerHTML = '';

    for (let celulaEl of arrCelulasEl) {
        celulaEl.style.cursor = 'pointer';
    }
}

function redirecionaParaTelaInicial() {
    inicioDoJogoEl.classList.remove('ocultar');
    maisInformacoes.linkEl.classList.remove('hidden');
    configuracoes.botaoAbrirEl.classList.add('hidden');
}

botaoSalvarProgressoEl.addEventListener('click', () => {
    salvarPartida();
    zerarPartida();
    redirecionaParaTelaInicial();
});

botaoExcluirProgressoEl.addEventListener('click', () => {
    zerarPartida();
    redirecionaParaTelaInicial();
});

function redefineValorDoCursorDaPartida (valorDoCursor) {
    for (let celulaEl of arrCelulasEl) {
        celulaEl.style.cursor = valorDoCursor;
    }
    botaoJogarVsAmigoEl.style.cursor = valorDoCursor;
}

configuracoes.botaoAbrirEl.addEventListener('click', () => {
    redefineValorDoCursorDaPartida ('auto');
});

configuracoes.botaoFecharEl.addEventListener('click', () => {
    redefineValorDoCursorDaPartida ('pointer');
});