let botaoConfiguracoesEl = document.querySelector ('#link-configuracoes'),
    configuracoesEl = document.querySelector ('.modal-configuracoes'),
    conteudoPrincipalEl = document.querySelector ('.conteudo-principal'),
    modoDeJogoEl = document.querySelector ('.modo-de-jogo');
    jogoEl = document.querySelector ('.jogo');

botaoConfiguracoesEl.addEventListener ('click', () => {
    configuracoesEl.classList.remove ('ocultar');
    configuracoesEl.classList.add ('transicao-abrir-modal');
    conteudoPrincipalEl.classList.add ('capa-escura-modal');

    if (!modoDeJogoEl.classList.contains ('ocultar')) {
        modoDeJogoEl.classList.add ('esconder-na-capa');
    }
    else if (!jogoEl.classList.contains ('ocultar')) {
        jogoEl.classList.add ('esconder-na-capa');
    }
});

let botaoVsComputadorEl = document.querySelector ('#botao-vs-computador');
botaoVsComputadorEl.addEventListener ('click', () => {
    alert ('kkk');
});