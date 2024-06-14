import {modal} from "./modal.js"
import { alertError } from "./alert-error.js"
import {calculateIMC, notANumber} from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector("#inpNum1")
const inputHeight = document.querySelector("#inpNum2")

 
form.onsubmit = function (event) {
    event.preventDefault() // não faz o padrão
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weithOrheightisNotANumber = notANumber(weight) || notANumber(height)    // validação se o valor de weight e height nao for um numero

    if (weithOrheightisNotANumber) {
        alertError.open()   // importado do script alert-error.js
        return; // aqui finaliza o programa se cair dentro deste IF (quando tem o return com ponto e vírgula)
    }

    alertError.close()  // importado do script alert-error.js

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
                                               

    if (weight == '' || height == '') { // condição, "se" o height e weight for vazio exiba uma mensagem de error
        alertError.classList.add('open') 
        modal.Wrapper.classList.remove('open') 
    }

    function displayResultMessage(result) {
        const message = `Seu IMC é de: ${result}`             
        modal.Message.innerText = message                     
        modal.open()
    }

}
    
    inputWeight.oninput = () => alertError.close()
    inputHeight.oninput = () => alertError.close()



