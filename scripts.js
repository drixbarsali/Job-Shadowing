
    setTimeout(() => {
    const banner = document.createElement('div');
    banner.id = 'promo-box';
    banner.innerHTML = '<p>SCONTO 20% SE CLICCHI ENTRO 1 MINUTO!</p>';
    document.getElementById('dynamic-banner').appendChild(banner);
}, 3000);


    document.getElementById('buy-btn').addEventListener('click', function() {
    const now = Date.now();
    while (Date.now() - now < 1000) {  }
    document.getElementById('feedback').innerText = "Aggiunto al carrello!";
});