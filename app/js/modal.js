function modal_login() {
    document.getElementById('tela_opaca').style.display = 'flex'
    document.getElementById('modal_login').style.display = 'flex'
    document.getElementById('modal_cadastro').style.display = 'none'
}

function close_modal() {
    document.getElementById('modal_post').style.display = 'none'
    document.getElementById('tela_opaca').style.display = 'none'
    document.getElementById('modal_login').style.display = 'none'
    document.getElementById('modal_cadastro').style.display = 'none'
    document.getElementById('modalMateria').style.display = 'none'
}

function modal_cadastro() {
    document.getElementById('tela_opaca').style.display = 'flex'
    document.getElementById('modal_cadastro').style.display = 'flex'
    document.getElementById('modal_login').style.display = 'none'
}

function postagem() {
    document.getElementById('tela_opaca').style.display = 'flex'
    document.getElementById('modal_post').style.display = 'flex'
    document.getElementById('modalMateria').style.display = 'none'
}