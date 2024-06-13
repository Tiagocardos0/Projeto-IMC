const form = document.querySelector('form')
const inputWeight = document.querySelector("#inpNum1")
const inputHeight = document.querySelector("#inpNum2")


const alertError = document.querySelector(".alert-error")

const modal = {
    Wrapper: document.querySelector(".modal-wrapper"),
    Message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open () {
        modal.Wrapper.classList.add('open')
    },

    close () {
        modal.Wrapper.classList.remove('open')
    }
} 

form.onsubmit = function (event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de: ${result}`

    modal.Message.innerText = message
    modal.open()

    if (weight == '') {
        alertError.classList.add('open')
        modal.Wrapper.classList.remove('open')
    }
}

modal.buttonClose.onclick = () => {
    modal.close()
}

function IMC (weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


