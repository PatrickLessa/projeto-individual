if(!sessionStorage.getItem("sessao")){
        window.location.href = '/'
}

function sair(){
    sessionStorage.clear()
    window.location.href = '/'
}

function open_materia(cod){
    let materia = document.querySelector('#materia' + cod).childNodes
    let infoMateria = materia[3].childNodes

    const info = {
        img: `../img/${materia[1].id}`,
        title: infoMateria[1].innerHTML,
        resum: infoMateria[3].innerHTML,
        text: materia[5].innerHTML
    }


    titleModal.innerHTML = info.title
    resumModal.innerHTML = info.resum
    imgModal.src = info.img
    textModal.innerHTML = info.text
    
    document.getElementById('tela_opaca').style.display = 'flex'
    document.getElementById('modalMateria').style.display = 'flex'
    console.log(info)
}