//Enviar mensagem
function enviarWhats(event){
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5581989289049';
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto) ;
    const url = `http://whatsa.me/${telefone}/?t=${msgFormatada}`;

    window.open(url, '_blank');
}