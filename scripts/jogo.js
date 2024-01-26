let inicioDoJogoEl = document.querySelector('.comecar-jogo'),
    botaoComecarEl = document.querySelector('button#comecar'),
    jogoEl = document.querySelector('.jogo'),
    modalVsAmigoEl = document.querySelector('.modal-vs-amigo'),
    botaoJogarVsAmigoEl = document.querySelector('#jogar-vs-amigo');
    modalRecuperarProgressoEl = document.querySelector ('.modal-recuperar-progresso');
    nomeJogadorUmEl = document.querySelector ('#nome-jogador-um'),
    nomeJogadorDoisEl = document.querySelector ('#nome-jogador-dois');
    linkAutoresEl = document.querySelector ('#link-autores');

botaoComecarEl.addEventListener('click', () => {
    inicioDoJogoEl.classList.add('ocultar');
    if (localStorage.getItem('jogo') !== null) {
        modalRecuperarProgressoEl.classList.remove('ocultar');
        modalRecuperarProgressoEl.classList.add('transicao-abrir-modal');
    }
    else {
        modalVsAmigoEl.classList.remove('ocultar');
        modalVsAmigoEl.classList.add('transicao-abrir-modal');
    }
    configuracoes.botaoAbrirEl.style.visibility = 'visible';
    linkAutoresEl.style.visibility = 'visible';
});

let opcaoBolinhaJogadorUmEl = document.querySelector('#jogador-um .bolinha'),
    opcaoBolinhaJogadorDoisEl = document.querySelector('#jogador-dois .bolinha'),
    opcaoXJogadorUmEl = document.querySelector('#jogador-um .x'),
    opcaoXJogadorDoisEl = document.querySelector('#jogador-dois .x');

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

function desmarcarOpcoes() {
    opcaoBolinhaJogadorDoisEl.classList.remove('marcar-opcao');
    opcaoXJogadorDoisEl.classList.remove('marcar-opcao');
    opcaoXJogadorUmEl.classList.remove('marcar-opcao');
    opcaoBolinhaJogadorUmEl.classList.remove('marcar-opcao');
    nomeJogadorUmEl.value = nomeJogadorDoisEl.value = '';
}

let nomeEscolheuXEl = document.querySelector ('#nome-x'),
    nomeEscolheuBolinhaEl = document.querySelector ('#nome-bolinha');

botaoJogarVsAmigoEl.addEventListener('click', () => {
    if (!marcada (opcaoBolinhaJogadorUmEl) && !marcada (opcaoXJogadorUmEl) ||
        !marcada (opcaoXJogadorDoisEl) && !marcada (opcaoBolinhaJogadorDoisEl) ||
        marcada (opcaoXJogadorUmEl) && marcada (opcaoXJogadorDoisEl) ||
        marcada (opcaoBolinhaJogadorUmEl) && marcada (opcaoBolinhaJogadorDoisEl)) {
        return;
    }
    audioInicial.pause();
    modalVsAmigoEl.classList.add('ocultar');
    jogoEl.classList.remove('ocultar');
    mainPrincipalEl.classList.remove('capa-escura-modal');
    configuracoes.botaoAbrirEl.style.visibility = 'visible';

    if (marcada (opcaoXJogadorDoisEl)) {
        nomeEscolheuXEl.innerHTML = nomeJogadorDoisEl.value;
    }
    else if (marcada (opcaoBolinhaJogadorDoisEl)) {
        nomeEscolheuBolinhaEl.innerHTML = nomeJogadorDoisEl.value;
    }
    
    if (marcada (opcaoBolinhaJogadorUmEl)) {
        nomeEscolheuBolinhaEl.innerHTML = nomeJogadorUmEl.value; 
    }
    else if (marcada (opcaoXJogadorUmEl)) {
        nomeEscolheuXEl.innerHTML = nomeJogadorUmEl.value;
    }

    desmarcarOpcoes();

    if (primeiroAComecar === 'O') {
        nomeEscolheuBolinhaEl.classList.add ('marcar-vez');
        divBolinhaEl.classList.add('marcar-vez');
    }
    else {
        nomeEscolheuXEl.classList.add ('marcar-vez');
        divXEl.classList.add('marcar-vez');
    }
});

let botaoRecuperarProgressoEl = document.querySelector('#botao-recuperar-progresso'),
    botaoNaoRecuperarProgressoEl = document.querySelector('#nao-recuperar-progresso');

botaoRecuperarProgressoEl.addEventListener('click', () => {
    modalRecuperarProgressoEl.classList.add ('ocultar');
    modalRecuperarProgressoEl.classList.remove ('transicao-abrir-modal');
    jogoEl.classList.remove ('ocultar');
    let jogo = JSON.parse (localStorage.getItem ('jogo'));
    vitoriasBolinhaEl.innerHTML = vitoriasBolinha = jogo.vitoriasBolinha;
    vitoriasXEl.innerHTML = vitoriasX = jogo.vitoriasX;
    primeiroAComecar = alterna (jogo.ultimoQueComecou);
    vez = primeiroAComecar;
    nomeEscolheuBolinhaEl.innerHTML = jogo.nomeEscolheuBolinha;
    nomeEscolheuXEl.innerHTML = jogo.nomeEscolheuX;
});

botaoNaoRecuperarProgressoEl.addEventListener('click', () => {
    modalRecuperarProgressoEl.classList.add ('ocultar');
    modalRecuperarProgressoEl.classList.remove ('transicao-abrir-modal');
    modalVsAmigoEl.classList.remove ('ocultar');
    modalVsAmigoEl.classList.add ('transicao-abrir-modal');
    localStorage.removeItem ('jogo');
})

configuracoes.botaoAbrirEl.addEventListener('click', () => {
    botaoVsAmigoEl.style.cursor = 'auto';
    botaoVsComputadorEl.style.cursor = 'auto';
});

configuracoes.botaoFecharEl.addEventListener('click', () => {
    botaoVsAmigoEl.style.cursor = 'pointer';
    botaoVsComputadorEl.style.cursor = 'pointer';
});

let arrCelulasEl = document.querySelectorAll('.linha div'),
    modalContinuarOuSairDoJogoEl = document.querySelector('.modal-continuar-ou-sair-do-jogo'),
    vitoriasBolinhaEl = document.querySelector('#vitorias-bolinha'),
    vitoriasXEl = document.querySelector('#vitorias-x'),
    divBolinhaEl = document.querySelector('.bolinha'),
    divXEl = document.querySelector('.x'),
    botaoContinuarJogoEl = document.querySelector('#continuar-jogo'),
    modalSalvarOuDescartarProgressoEl = document.querySelector('.modal-salvar-ou-descartar-progresso'),
    botaoSairDoJogoEl = document.querySelector('#sair-do-jogo'),
    botaoExcluirProgressoEl = document.querySelector('#excluir-progresso'),
    botaoSalvarProgressoEl = document.querySelector('#salvar-progresso');

function criarTabuleiro() {
    let tabuleiro = [[, , ,], [, , ,], [, , ,]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tabuleiro[i][j] = arrCelulasEl[(i * 3) + j];
        }
    }
    return tabuleiro;
}

let tabuleiro = criarTabuleiro();

function verificaLinhas() {
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

function verificaColunas() {
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

function verificaDiagonais() {
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

function alterna(peca) {
    if (peca === 'O') {
        peca = 'X';
        nomeEscolheuXEl.classList.add ('marcar-vez');
        divXEl.classList.add('marcar-vez');
        divBolinhaEl.classList.remove('marcar-vez');
        nomeEscolheuBolinhaEl.classList.remove ('marcar-vez');
    }
    else {
        peca = 'O';
        nomeEscolheuBolinhaEl.classList.add ('marcar-vez');
        divBolinhaEl.classList.add('marcar-vez');
        divXEl.classList.remove('marcar-vez');
        nomeEscolheuXEl.classList.remove ('marcar-vez');
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

function contaVitoria(pecaVencedora) {
    if (pecaVencedora === 'O') {
        vitoriasBolinha++;
        vitoriasBolinhaEl.innerHTML = vitoriasBolinha;
    }
    else {
        vitoriasX++;
        vitoriasXEl.innerHTML = vitoriasX;
    }
}

function limpar() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tabuleiro[i][j].innerHTML = '';
            tabuleiro[i][j].classList.remove('expandir-retrair');
        }
    }
    contJogadas = 0;
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
            vez = alterna(vez);
            return;
        }

        temVencedor = (verificaLinhas() || verificaColunas() || verificaDiagonais());
        let tempoDeAtraso;
        if (temVencedor || empate()) {
            if (temVencedor) {
                let vencedor = vez;
                contaVitoria(vencedor);
            }
            tempoDeAtraso = (temVencedor) ? 5000 : 50;
            setTimeout(() => {
                for (let celulaEl of arrCelulasEl) {
                    celulaEl.style.cursor = 'auto';
                }
                mainPrincipalEl.classList.add('capa-escura-modal');
                jogoEl.classList.add('esconder-na-capa');
                modalContinuarOuSairDoJogoEl.classList.add('transicao-abrir-modal');
                modalContinuarOuSairDoJogoEl.classList.remove('ocultar');
                divBolinhaEl.classList.remove('marcar-vez');
                divXEl.classList.remove('marcar-vez');
                nomeEscolheuBolinhaEl.classList.remove ('marcar-vez');
                nomeEscolheuXEl.classList.remove ('marcar-vez');
            }, tempoDeAtraso);
            configuracoes.botaoAbrirEl.style.visibility = 'hidden';
        }
        else {
            vez = alterna(vez);
        }
    });
}

botaoContinuarJogoEl.addEventListener('click', () => {
    modalContinuarOuSairDoJogoEl.classList.add('ocultar');
    modalContinuarOuSairDoJogoEl.classList.remove('transicao-abrir-modal');
    mainPrincipalEl.classList.remove('capa-escura-modal');
    jogoEl.classList.remove('esconder-na-capa');
    limpar();
    configuracoes.botaoAbrirEl.style.visibility = 'visible';
    for (let celulaEl of arrCelulasEl) {
        celulaEl.style.cursor = 'pointer';
    }
    temVencedor = false;

    primeiroAComecar = alterna(primeiroAComecar);
    vez = primeiroAComecar;
});

botaoSairDoJogoEl.addEventListener('click', () => {
    modalContinuarOuSairDoJogoEl.classList.add('ocultar');
    modalSalvarOuDescartarProgressoEl.classList.remove('ocultar');
    modalSalvarOuDescartarProgressoEl.classList.add('transicao-abrir-modal');
    for (let celulaEl of arrCelulasEl) {
        celulaEl.style.cursor = 'auto';
    }
    limpar();
    jogoEl.classList.add ('ocultar');
    temVencedor = false;
});

botaoSalvarProgressoEl.addEventListener('click', () => {
    modalSalvarOuDescartarProgressoEl.classList.add('ocultar');
    modalSalvarOuDescartarProgressoEl.classList.remove('transicao-abrir-modal');
    mainPrincipalEl.classList.remove('capa-escura-modal');
    jogoEl.classList.remove('esconder-na-capa');

    let jogo = {
        nomeEscolheuBolinha: nomeEscolheuBolinhaEl.innerHTML,
        nomeEscolheuX: nomeEscolheuXEl.innerHTML,
        vitoriasBolinha: vitoriasBolinhaEl.innerHTML,
        vitoriasX: vitoriasXEl.innerHTML,
        ultimoQueComecou: primeiroAComecar
    };

    localStorage.setItem('jogo', JSON.stringify(jogo));

    vitoriasBolinhaEl.innerHTML = vitoriasXEl.innerHTML = 0;
    vitoriasBolinha = vitoriasX = 0;
    nomeEscolheuBolinhaEl.innerHTML = nomeEscolheuXEl.innerHTML = '';

    for (let celulaEl of arrCelulasEl) {
        celulaEl.style.cursor = 'pointer';
    }

    inicioDoJogoEl.classList.remove ('ocultar');
});

botaoExcluirProgressoEl.addEventListener('click', () => {
    modalSalvarOuDescartarProgressoEl.classList.add('ocultar');
    mainPrincipalEl.classList.remove('capa-escura-modal');
    jogoEl.classList.remove('esconder-na-capa');
    jogoEl.classList.add('ocultar');
    modoDeJogoEl.classList.remove('ocultar');
    configuracoes.botaoAbrirEl.style.visibility = 'visible';
    for (let celulaEl of arrCelulasEl) {
        celulaEl.style.cursor = 'pointer';
    }
    vitoriasBolinhaEl.innerHTML = vitoriasXEl.innerHTML = 0;
    vitoriasBolinha = vitoriasX = 0;
    nomeEscolheuBolinhaEl.innerHTML = nomeEscolheuXEl.innerHTML = '';

    inicioDoJogoEl.classList.remove ('ocultar');
    linkAutoresEl.style.visibility = 'hidden';
    configuracoes.botaoAbrirEl.style.visibility = 'hidden';
});

configuracoes.botaoAbrirEl.addEventListener('click', () => {
    for (let celulaEl of arrCelulasEl) {
        celulaEl.style.cursor = 'auto';
    }
});

configuracoes.botaoFecharEl.addEventListener('click', () => {
    for (let celulaEl of arrCelulasEl) {
        celulaEl.style.cursor = 'pointer';
    }
});