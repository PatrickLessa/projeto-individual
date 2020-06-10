function modal_login() {
    document.getElementById('tela_login').style.display = 'flex'
    document.getElementById('modal_login').style.display = 'flex'
    document.getElementById('modal_cadastro').style.display = 'none'
}

function close_modal() {
    document.getElementById('tela_login').style.display = 'none'
    document.getElementById('modal_login').style.display = 'none'
    document.getElementById('modal_cadastro').style.display = 'none'
}

function modal_cadastro() {
    document.getElementById('tela_login').style.display = 'flex'
    document.getElementById('modal_cadastro').style.display = 'flex'
    document.getElementById('modal_login').style.display = 'none'
}