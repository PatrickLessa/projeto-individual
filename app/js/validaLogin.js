let pwdConfirm = false
let userConfirm = false
const classWrong = 'input-wrong'
const btnWrong = 'btn-wrong'

function validaLogin(input){
    const inputLogin = document.querySelector(input).value

    if(input == "#userLogin"){
        if(inputLogin.length < 5){
            document.querySelector(input).classList.add(classWrong)
            userConfirm = false
        }else{
            document.querySelector(input).classList.remove(classWrong)
            userConfirm = true
        }
    }else if(input == "#pwdLogin"){
        if(inputLogin.length < 8){
            document.querySelector(input).classList.add(classWrong)
            pwdConfirm = false
        }else{
            document.querySelector(input).classList.remove(classWrong)
            pwdConfirm = true
        }
    }

    if(userConfirm && pwdConfirm){
        document.querySelector("#btnLogin").disabled = false
        document.querySelector("#btnLogin").classList.remove(btnWrong)
    }else{
        document.querySelector("#btnLogin").disabled = true
        document.querySelector("#btnLogin").classList.add(btnWrong)
    }
}