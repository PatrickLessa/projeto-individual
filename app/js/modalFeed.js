function close_modal(){
    document.getElementById('tela_opaca').style.display = 'none'
    document.getElementById('modal_post').style.display = 'none'
    document.getElementById('modalMateria').style.display = 'none'
}

function modal_postagem(){
    document.getElementById('tela_opaca').style.display = 'flex'
    document.getElementById('modal_post').style.display = 'flex'
    document.getElementById('modalMateria').style.display = 'none'
}