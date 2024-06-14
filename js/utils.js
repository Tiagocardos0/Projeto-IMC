export function notANumber (value) {  // função de validação "se" o valor que entrar na função NÃO for um número OU o valor for VAZIO
    return isNaN(value) || value == ''
}

export function calculateIMC (weight, height) {  // função que calcula o IMC
    return (weight / ((height / 100) ** 2)).toFixed(2)
}