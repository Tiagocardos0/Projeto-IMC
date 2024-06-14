export const alertError = {
    Element: document.querySelector('.alert-error'),

    open() {
        alertError.Element.classList.add('open')
    },

    close() {
        alertError.Element.classList.remove('open')
    }
}