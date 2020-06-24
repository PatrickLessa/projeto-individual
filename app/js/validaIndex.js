let pwdConfirm = false
let userConfirm = false
const classWrong = 'input-wrong'
const btnWrong = 'btn-wrong'

function addRemove(result, target){
    if(result){
        document.querySelector(target).classList.remove(classWrong)
    }else{
        document.querySelector(target).classList.add(classWrong)
    }
}

function err(result, target, msg){
    if(result){
        document.querySelector(target).innerHTML = msg
        document.querySelector(target).style.display = 'none'
    }else{
        document.querySelector(target).innerHTML = msg
        document.querySelector(target).style.display = 'block'
    }
    
}

function validaLogin(input){
    const inputLogin = document.querySelector(input).value

    if(input == "#userLogin"){
        if(inputLogin.length < 5){
            addRemove(false, input)
            userConfirm = false
        }else{
            addRemove(true, input)
            userConfirm = true
        }
    }else if(input == "#pwdLogin"){
        if(inputLogin.length < 8){
            addRemove(false, input)
            pwdConfirm = false
        }else{
            addRemove(true, input)
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

let nomeConfirm = false;
let userCadastroConfirm = false;
let emailConfirm = false;
let pwdCadastroConfirm = false;
let pwd2CadastroConfirm = false;
const especials = ['@', '#', '$', '%', '&', '*', '₢']

function validaCadastro(input, msgErr){
    const inputCadastro = document.querySelector(input).value.trimStart().trimEnd()
    let contNome = 0
    switch (input) {
        case '#nome':
            for(let i = 0; i < especials.length; i++){
                for(let j = 0; j < inputCadastro.length; j++){
                    if(inputCadastro[j] == especials[i]){
                        contNome++
                    }
                }
            }

            if(inputCadastro.length < 10){
                addRemove(false, input)
                err(false, msgErr, 'Minimo 10 caracters')
                nomeConfirm = false;
            }else if(contNome > 0){
                addRemove(false, input)
                err(false, msgErr, 'Sem caracteres especiais')
                nomeConfirm = false;
            }else{
                addRemove(true, input)
                err(true, msgErr, '')
                nomeConfirm = true;
            }
            
            break;
            
        case '#user':
            if(inputCadastro.length < 5){
                addRemove(false, input)
                err(false, msgErr, 'Minimo 5 caracters')
                userCadastroConfirm = false;
            }else{
                addRemove(true, input)
                err(true, msgErr, '')
                userCadastroConfirm = true;
            }
            break;

        case '#email':
            let verifyEmail1 = inputCadastro.indexOf('@')
            let verifyEmail2 = inputCadastro.indexOf('.')

            if(verifyEmail1 > -1){
                if(verifyEmail2 > verifyEmail1){
                    addRemove(true, input)
                    err(true, msgErr, '')
                    emailConfirm = true;
                }else{
                    addRemove(false, input)
                    err(false, msgErr, 'Email inválido')
                    emailConfirm = false;
                }
            }else{
                addRemove(false, input)
                err(false, msgErr, 'Email inválido')
                emailConfirm = false;
            }

            break;

        case '#pwdCadastro':
            if(inputCadastro.length < 8 || inputCadastro.length > 16){
                addRemove(false, input)
                err(false, msgErr, 'Senha deve conter entre 8 e 16 caracters')
                pwdCadastroConfirm = false;
            }else{
                addRemove(true, input)
                err(true, msgErr, '')
                pwdCadastroConfirm = true;
            }
            break;

        case '#pwdCadastroConfirma':
            const senha = document.querySelector('#pwdCadastro').value
            if(inputCadastro != senha){
                addRemove(false, input)
                err(false, msgErr, 'Senhas não conferem')
                pwd2CadastroConfirm = false
            }else{
                addRemove(true, input)
                err(true, msgErr, '')
                pwd2CadastroConfirm = true
            }
        default:
            break;
    }

    document.querySelector(input).value = inputCadastro
    if(nomeConfirm &&
        userCadastroConfirm &&
        emailConfirm &&
        pwdCadastroConfirm &&
        pwd2CadastroConfirm){
            
        document.querySelector("#btnCadastro").disabled = false
        document.querySelector("#btnCadastro").classList.remove(btnWrong)
    }else{
        document.querySelector("#btnCadastro").disabled = true
        document.querySelector("#btnCadastro").classList.add(btnWrong)
    }
}