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
for (let i = 1; i < secoesDaPaginaEl.length; i++) {
    secoesDaPaginaEl[i].classList.add('ocultar');
    secoesDaPaginaEl[i].classList.add('transicao-abrir-modal');
}

botaoComecarEl.addEventListener('click', () => {
    if (!estaOculto(maisInformacoes.modalEl))
        return;

    inicioDoJogoEl.classList.add('ocultar');
    if (localStorage.getItem('partida') !== null)
        modalRecuperarProgressoEl.classList.remove('ocultar');
    else
        modalVsAmigoEl.classList.remove('ocultar');

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

// função para verificar se alguma opção foi marcada
function marcada(opcaoEl) {
    return (opcaoEl.classList.contains('marcar-opcao'));
}

// função para verificar se algum modal está oculto
function estaOculto(modalEl) {
    return (modalEl.classList.contains('ocultar'));
}

// função que carrega os nomes na partida, de acordo com suas respectivas escolhas(O ou X)
function carregarNomesNaPartida() {
    if (marcada(opcaoXJogadorDoisEl))
        nomeEscolheuXEl.innerHTML = nomeJogadorDoisEl.value;
    else
        nomeEscolheuBolinhaEl.innerHTML = nomeJogadorDoisEl.value;

    if (marcada(opcaoBolinhaJogadorUmEl))
        nomeEscolheuBolinhaEl.innerHTML = nomeJogadorUmEl.value;
    else
        nomeEscolheuXEl.innerHTML = nomeJogadorUmEl.value;

    nomeJogadorUmEl.value = nomeJogadorDoisEl.value = '';
}

// função que limpa as opções marcadas
function desmarcarOpcoes() {
    opcaoBolinhaJogadorDoisEl.classList.remove('marcar-opcao');
    opcaoXJogadorDoisEl.classList.remove('marcar-opcao');
    opcaoXJogadorUmEl.classList.remove('marcar-opcao');
    opcaoBolinhaJogadorUmEl.classList.remove('marcar-opcao');
}

// função para marcar a vez do primeiro a jogar
function marcaVezPrimeiroJogar() {
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
        marcada(opcaoBolinhaJogadorUmEl) && marcada(opcaoBolinhaJogadorDoisEl))
        return;

    audioInicial.pause();
    modalVsAmigoEl.classList.add('ocultar');
    jogoEl.classList.remove('ocultar');
    carregarNomesNaPartida();
    desmarcarOpcoes();
    marcaVezPrimeiroJogar();
});

//função para restaurar um jogo salvo com localStorage
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

// função para criar uma matriz de celulas(apenas para facilitar)
function criarMatrizDeCelulas() {
    let tabuleiro = [[, , ,], [, , ,], [, , ,]];
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            tabuleiro[i][j] = arrCelulasEl[(i * 3) + j];

    return tabuleiro;
}

let tabuleiro = criarMatrizDeCelulas();

// função para alternar a vez
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
function sortearPrimeiroComecar() {
    let numero = Math.random();
    let primeiroComecar;
    primeiroComecar = (numero <= 0.5) ? 'O' : 'X';
    return primeiroComecar;
}

// função para limpar as células do tabuleiro
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

// função para remover a classe marcar-vez
function desmarcarVez() {
    divBolinhaEl.classList.remove('marcar-vez');
    divXEl.classList.remove('marcar-vez');
    nomeEscolheuBolinhaEl.classList.remove('marcar-vez');
    nomeEscolheuXEl.classList.remove('marcar-vez');
}

let vez, primeiroAComecar = sortearPrimeiroComecar();
let contJogadas = 0;
vez = primeiroAComecar;
let vitoriasBolinha = 0, vitoriasX = 0;
let temVencedor;

// controla todo o jogo
function jogo(e) {
    // função para validar as linhas do tabuleiro
    function verificarLinhas() {
        for (let i = 0; i < 3; i++) {
            if (tabuleiro[i][0].innerHTML === vez && tabuleiro[i][1].innerHTML === vez && tabuleiro[i][2].innerHTML === vez) {
                tabuleiro[i][0].classList.add('expandir-retrair');
                tabuleiro[i][1].classList.add('expandir-retrair');
                tabuleiro[i][2].classList.add('expandir-retrair');
                return true;
            }
        }
        return false;
    }

    // função para validar as colunas do tabuleiro
    function verificarColunas() {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[0][j].innerHTML === vez && tabuleiro[1][j].innerHTML === vez && tabuleiro[2][j].innerHTML === vez) {
                tabuleiro[0][j].classList.add('expandir-retrair');
                tabuleiro[1][j].classList.add('expandir-retrair');
                tabuleiro[2][j].classList.add('expandir-retrair');
                return true;
            }
        }
        return false;
    }

    // função para validar as diagonais do tabuleiro
    function verificarDiagonais() {
        if (tabuleiro[0][0].innerHTML === vez && tabuleiro[1][1].innerHTML === vez && tabuleiro[2][2].innerHTML === vez) {
            tabuleiro[0][0].classList.add('expandir-retrair');
            tabuleiro[1][1].classList.add('expandir-retrair');
            tabuleiro[2][2].classList.add('expandir-retrair');
            return true;
        }
        if (tabuleiro[0][2].innerHTML === vez && tabuleiro[1][1].innerHTML === vez && tabuleiro[2][0].innerHTML === vez) {
            tabuleiro[0][2].classList.add('expandir-retrair');
            tabuleiro[1][1].classList.add('expandir-retrair');
            tabuleiro[2][0].classList.add('expandir-retrair');
            return true;
        }
        return false;
    }

    // função que incrementa o número de vitorias da peça vencedora
    function setVitorias(pecaVencedora) {
        if (pecaVencedora === 'O') {
            vitoriasBolinha++;
            vitoriasBolinhaEl.innerHTML = vitoriasBolinha;
        }
        else {
            vitoriasX++;
            vitoriasXEl.innerHTML = vitoriasX;
        }
    }

    function empate() {
        for(let celulaEl of arrCelulasEl)
            if(celulaEl.innerHTML === ' ')
                return false;

        return true;
    }

    let celulaRecuperadaEl = e.currentTarget;

    if (celulaRecuperadaEl.innerHTML !== '' || temVencedor || !estaOculto(configuracoes.modalEl)
        || mainPrincipalEl.classList.contains('capa-escura-modal'))
        return;

    reproduzir(clickNaCelula);
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
            setVitorias(vencedor);
        }
        tempoDeAtraso = (temVencedor) ? 5000 : 50;
        configuracoes.botaoAbrirEl.classList.add('hidden');
        maisInformacoes.linkEl.classList.add('hidden');
        setTimeout(() => {
            for (let celulaEl of arrCelulasEl)
                celulaEl.style.cursor = 'auto';

            abrirModal(modalContinuarOuSairDoJogoEl);
            desmarcarVez();
        }, tempoDeAtraso);
    }
    else {
        vez = alternar(vez);
    }
}

for (let celulaEl of arrCelulasEl) {
    celulaEl.addEventListener('click', jogo);
}

botaoContinuarJogoEl.addEventListener('click', () => {
    fecharModal(modalContinuarOuSairDoJogoEl);
    limparCelulas();
    configuracoes.botaoAbrirEl.classList.remove('hidden');
    maisInformacoes.linkEl.classList.remove('hidden');
    temVencedor = false;
    primeiroAComecar = alternar(primeiroAComecar);
    vez = primeiroAComecar;
});

botaoSairDoJogoEl.addEventListener('click', () => {
    fecharModal(modalContinuarOuSairDoJogoEl);
    abrirModal(modalSalvarOuDescartarProgressoEl);
    limparCelulas();
    temVencedor = false;
});

// função para salvar a partida no localStorage
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

// função para zerar a partida
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

// função para redirecionar para a tela inicial
function redirecionaTelaInicial() {
    inicioDoJogoEl.classList.remove('ocultar');
    maisInformacoes.linkEl.classList.remove('hidden');
    configuracoes.botaoAbrirEl.classList.add('hidden');
    jogoEl.classList.add('ocultar');
}

botaoSalvarProgressoEl.addEventListener('click', () => {
    salvarPartida();
    zerarPartida();
    redirecionaTelaInicial();
});

botaoExcluirProgressoEl.addEventListener('click', () => {
    zerarPartida();
    redirecionaTelaInicial();
});

// função que redefine o valor do cursor da partida
function redefineValorCursorPartida(valorCursor) {
    for (let celulaEl of arrCelulasEl)
        celulaEl.style.cursor = valorCursor;

    botaoJogarVsAmigoEl.style.cursor = valorCursor;
}

configuracoes.botaoAbrirEl.addEventListener('click', () => {
    redefineValorCursorPartida('auto');
});

configuracoes.botaoFecharEl.addEventListener('click', () => {
    redefineValorCursorPartida('pointer');
});