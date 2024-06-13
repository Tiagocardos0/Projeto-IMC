const form = document.querySelector('form')
const inputWeight = document.querySelector("#inpNum1")
const inputHeight = document.querySelector("#inpNum2")

const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".modal .title span")
const modalBtnClose = document.querySelector(".modal button.close")
const alertError = document.querySelector(".alert-error")

form.onsubmit = function (event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de: ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')

    if (inputWeight.value == '') {
        alertError.classList.add('open')
        modalWrapper.classList.remove('open')
    }
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
}

function IMC (weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


