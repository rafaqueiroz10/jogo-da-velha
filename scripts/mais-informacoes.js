let maisInformacoes = {
    modalEl: document.querySelector ('.modal-informacoes'),
    linkEl: document.querySelector ('#link-informacoes'),
    botaoFecharModalEl: document.querySelector ('#fechar-modal-informacoes')
};

maisInformacoes.modalEl.classList.add ('ocultar');

maisInformacoes.linkEl.addEventListener ('click', () => {
    redefineValorDoCursorDaPartida ('auto');
    fecharModal (configuracoes.modalEl);
    abrirModal (maisInformacoes.modalEl);
});
maisInformacoes.botaoFecharModalEl.addEventListener ('click', () => {
    redefineValorDoCursorDaPartida ('pointer');
    fecharModal (maisInformacoes.modalEl);
});

configuracoes.botaoAbrirEl.addEventListener ('click', () => {
    maisInformacoes.modalEl.classList.add ('ocultar');
});