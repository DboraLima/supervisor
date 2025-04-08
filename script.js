document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Você escolheu SIM!');
    // Ação ao clicar em "Sim"
});

document.getElementById('noBtn').addEventListener('click', function() {
    // Ao clicar em "Não", a opção "Não" começa a se mover
    this.classList.add('moving');
    this.disabled = true; // Desabilita o botão "Não"
    alert('Você escolheu NÃO, mas não pode mais clicar em NÃO!');
});
