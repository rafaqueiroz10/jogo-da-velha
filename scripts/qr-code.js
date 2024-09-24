let imgQrCodeEl = document.querySelector("#img-qr-code");

// função para gerar o link do qr code
function gerarLink() {
    const currentLink = location.href;
    imgQrCodeEl.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(currentLink)}`;
}

gerarLink();