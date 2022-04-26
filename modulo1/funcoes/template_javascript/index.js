// 1- 
function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a - 10 e 50
//b - como na função não tem console, não aparecerá nada.

//2-
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function (texto) {
    return texto.toLowerCase()
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a - 
// pedi para o usuario escrever um texto
// deixa o texto em minusculo e 
// verifica se esta incluido a palavra cenoura

//b- 
// i- eu gosto de cenoura - true
// ii- cenoura é bom pra vista - true
// iii- cenouras crescem na terra - true

// 1 - a 
function minhasInformaoes() {

    console.log('Meu nome é Gabriel, tenho 22 anos, moro em rio Branco e sou estudante da Labenu.')
}

minhasInformaoes()

//b- 
function informacoes() {
    const nome = prompt('qual seu nome?')
    const idade = Number(prompt('qual sua idade?'))
    const cidade = prompt('qual sua cidade?')
    const profissao = prompt('qual sua profissao?')
    console.log('Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.')
}

informacoes()

// 2-
// a-
const valor1 = Number(prompt("Informe o primeiro número:"))
const valor2 = Number(prompt("Informe o segundo número:"))

function operacao(n1, n2) {
    const soma = n1 + n2
    return soma
}

const resultado = operacao(valor1, valor2)
console.log(resultado)

//b-
function operacao(valor1, valor2) {
    const maiorOuIgual = valor1 >= valor2
    console.log(maiorOuIgual)
}

operacao(valor1, valor2)

//c-
const numero = Number(prompt("Informe um numero para verificar se ele é par ou não:"))

const operacao = (numero) => {
    const paridade = (numero % 2 === 0)
    return paridade
}

const resultado = operacao(numero)
console.log('O número ${numero} é par? ${resultado}')

//d-
const mensagem = (prompt("Escreva uma mensagem:"))

function mensagem2(mensagem) {
    const tamanhoDaMensagem = mensagem.length
    const mensagemMaiuscula = mensagem.toUpperCase()
    console.log(`O tamanho da mensagem é: ${tamanhoDaMensagem}, e sua versão em maiúscula é: ${mensagemMaiuscula}`)
}

mensagem2(mensagem)

//3-
const n1 = Number(prompt("Informe o primeiro número:"))
const n2 = Number(prompt("Informe o segundo número:"))

function operacaoSoma(n1, n2) {
    const soma = n1 + n2
    return soma
}

function operacaoDiferenca(n1, n2) {
    const subtracao = n1 - n2
    return subtracao
}

function operacaoMultiplicacao(n1, n2) {
    const multiplicacao = n1 * n2
    return multiplicacao
}

function operacaoDivisao(n1, n2) {
    const divisao = n1 / n2
    return divisao
}

console.log(`Números inseridos: ${n1} e ${n2}`)
console.log(`Soma: ${operacaoSoma(n1, n2)}`)
console.log(`Diferença: ${operacaoDiferenca(n1, n2)}`)
console.log(`Multiplicação: ${operacaoMultiplicacao(n1, n2)}`)
console.log(`Divisão: ${operacaoDivisao(n1, n2)}`)

//DESAFIO 1
//a-
const funcaoArrow = (parametro) => {
    console.log(parametro)
}

let parametro = prompt("Digite algo:")
funcaoArrow(parametro)

//b-
const valor1 = Number(prompt("Digite o primeiro valor:"))
const valor2 = Number(prompt("Digite o segundo valor:"))

const funcaoArrowSoma = (valor1, valor2) => {
    const somando = valor1 + valor2
    return somando
}

parametro = funcaoArrowSoma(valor1, valor2)
funcaoArrow(parametro)

//DESAFIO 2

const cateto1 = Number(prompt("Insira o primeiro cateto:"))
const cateto2 = Number(prompt("Insira o segunco cateto:"))

function teoremaDePitagoras(cateto1, cateto2) {
    const potencia1 = cateto1 ** 2
    const potencia2 = cateto2 ** 2
    const soma = potencia1 + potencia2
    const raizQuadrada = Math.sqrt(soma)
    const hipotenusa = raizQuadrada
    console.log(hipotenusa)
}

teoremaDePitagoras(cateto1, cateto2)



















