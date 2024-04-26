const formContatos = document.getElementById('form-contatos');
const campoContatos = document.querySelector('.campo-contatos');
const contatosPreenchidos = document.querySelector('.contatos-preenchido');

formContatos.addEventListener('submit', function(event) {
    event.preventDefault();
    campoContatos.style.display = 'none';
    contatosPreenchidos.style.display = 'block';
});