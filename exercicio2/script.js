// //Exercicios A,B e C:

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
const minhaStringFormatada = minhaString.trim()
const minhaNovaString = minhaString.replace ("________.","sticioso")

console.log (`Quantidade de caracteres antes de remover espaços: ${minhaString.length}`)
console.log (`Quantidade de caracteres depois de remover espaços: ${minhaStringFormatada.length}`)
console.log (`Frase editada: ${minhaNovaString}`)

