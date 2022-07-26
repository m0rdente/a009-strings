const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
const novaCor = frase.replace("verde","rosa")
const segundaCor = novaCor.replace("azul","laranja")
const fraseFinal = segundaCor.replaceAll("não deixe o gato sair", "NÃO DEIXE O GATO SAIR")

console.log (fraseFinal)
