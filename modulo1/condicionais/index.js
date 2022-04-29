//exercicio 1

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// pergunta ao usuario um numero, se o numero digitado tiver resto igual a 0 ele é par
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// somente numeros par
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// numeros impares

//2- A) pergunta ao usuario o nome de uma fruta e conforme a resposta da o preço dela
// B) 2,25
// C) iria dar erro

//3- A) pedindo para o usuario digitar um numero
// B) esse numero passou no texte. se fosse -10 não iria exibir nada.
// C) no console mensagem havera um erro porque ele esta no escopo globalThis,
// e a mensagem esta no escopo local. 

//exercicios de escrita
//1- 

const idadeUsuario = Number(prompt("qual sua idade?"))

// idade>=18 "Você pode dirigir", 
// idade<18 "Você não pode dirigir"

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.");
}

//2-

const turno = prompt("Em que turno voce estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

if (turno === "M") {
    console.log("Bom dia!");
} else if (turno === "V") {
    console.log("Boa tarde!");
} else if (turno === "N") {
    console.log("Boa noite!");
}

//3-

const turno = prompt("Em que turno voce estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

switch (turno) {
    case "M":
    console.log("Bom dia!");
    break
    case "V":
    console.log("Boa tarde!");
    break
    case "N":
    console.log("Boa noite!");
    break
    default:
    console.log("turno incorreto");
}

//4- 

const genero = prompt("Qual o genero do filme?")
const preco = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && preco < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}

//desafio 1

const genero = prompt("Qual o genero do filme?")
const preco = Number(prompt("Qual o preço do ingresso?"))
const lanchinho = prompt("qual lanchinho vai comprar?")

if (genero === "fantasia" && preco < 15) {
    console.log("Bom filme! e aproveite seu", lanchinho);
} else {
    console.log("Escolha outro filme :(");
}

//desafio 2

// imprimir:
// valorDeCadaIngresso
// valor total: valor de cada ingresso x quantidadeIngressos

const nome = prompt("qual seu nome completo?")
const tipoDeJogo = prompt("qual o tipo de jogo? IN (internacional) ou DO (doméstico)?")
const etapaDoJogo = prompt("qual etapa do jogo SF(semi-final), DT(decisão terceiro lugar) ou FI(final)?")
const categoria = Number(prompt("qual a categoria? 1,2,3 ou 4"))
const quantidadeIngressos = Number(prompt("qual a quantidade de ingressos?"))
let valorDeCadaIngresso = Number
let valorTotal = (valorDeCadaIngresso * quantidadeIngressos)

const c1 = [
    sf = 1320
    dt = 660
    fi = 1980
]

if (categoria === 1){
    const semifinal = 1320
    const dt = 660
    const fi = 1980
}

console.log("---Dados da compra---")
console.log("Nome do cliente:", nome)
console.log("Tipo de jogo:", tipoDeJogo)
console.log("Etapa do jogo:", etapaDoJogo)
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos:", quantidadeIngressos)
console.log("---Valores---")
console.log("Valor do ingresso:", valorDeCadaIngresso)
console.log("Valor total:", valorTotal)

//amanha finalizo