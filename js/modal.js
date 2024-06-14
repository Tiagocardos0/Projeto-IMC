    
export const modal = {
    Wrapper: document.querySelector(".modal-wrapper"),
    Message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open () {
        modal.Wrapper.classList.add('open')  // função que adiciona o modal
    },

    close () {
        modal.Wrapper.classList.remove('open') // função que remove o modal
    }
}

modal.buttonClose.onclick = () => {  
    modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown (event) { // função do evento de quando clicar o botão ESC fechar
    if(event.key === 'Escape' ) {
        modal.close()
    }
}