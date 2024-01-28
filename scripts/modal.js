function abrirModal(modalEl) {
    modalEl.classList.remove('ocultar');
    modalEl.classList.add('transicao-abrir-modal');
    mainPrincipalEl.classList.add('capa-escura-modal');
    for (let secaoEl of secoesDaPaginaEl) {
        if (!estaOculto(secaoEl)) {
            secaoEl.classList.add('esconder-na-capa');
            return;
        }
    }
}

function fecharModal(modalEl) {
    modalEl.classList.add('ocultar');
    mainPrincipalEl.classList.remove('capa-escura-modal');
    for (let secaoEl of secoesDaPaginaEl) {
        if (!estaOculto(secaoEl)) {
            secaoEl.classList.remove('esconder-na-capa');
            return;
        }
    }
}