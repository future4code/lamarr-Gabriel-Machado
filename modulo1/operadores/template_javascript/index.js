//EXERCÍCIO DE INTERPRETAÇÃO - 1
const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) 
/*Essa console irá retornar no terminal o resultado "False" */
/* a. false */

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
/*Essa console irá retornar no terminal o resultado "False" */
/*b. false */

resultado = !resultado && (bool1 || bool2) //true true
console.log("c. ", resultado)
/*Essa console irá retornar no terminal o rescultado "True"*/

console.log("d. ", typeof resultado)
/*Essa console irá mostar no terminal o tipo da variável resultado, que é do tipo booleana */


//EXERCÍCIO DE INTERPRETAÇÃO - 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//Irá aparecer no console os números concatenados e não somados, pois ele não converteu em strings(que são os valores recebidos na variavel prompt)


//EXERCÍCIO DE INTERPRETAÇÃO - 3
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

let numero1
let numero2

numero1 = Number(primeiroNumero)
numero2 = Number(segundoNumero)

const soma = numero1 + numero2

console.log(soma)

/*Iria mostrar para ele que o erro se dá devido ao tipo da variavel prompt e orienta-lo a fazer a conversão conforme acima.
Tem também a possibilidade dele colocar o Number antes de prompt de ambas variaveis para que os tipos delas seja soment números */

//EXERCÍCIO DE ESCRITA - 1
const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior que a do seu melhor amigo", idadeUsuario > idadeMelhorAmigo)
console.log("A diferença de idade entre vocês é:", idadeUsuario - idadeMelhorAmigo,"anos")



//EXERCÍCIO DE ESCRITA - 2
let numeroPar = Number(prompt("Insira um número par"))

console.log(numeroPar % 2)
/*Quando se insere numeros pares, os resultados são sempre 0
quando se insere numeros impares, os resultados são sempre 1 */



//EXERCÍCIO DE ESCRITA - 3
const suaIdadeAnos = Number(prompt("Qual a sua idade em anos?"))

console.log("Sua idade em meses é:", suaIdadeAnos * 12, "meses")
console.log("Sua idade em dias são:",suaIdadeAnos * 365, "dias")
console.log("Sua idade em horas é:", suaIdadeAnos * 8760, "horas")


//EXERCÍCIO DE ESCRITA - 4
const numero1 = Number(prompt("Informe o primeiro número:"))
const numero2 = Number(prompt("Informe o segundo número:"))


console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divísivel pelo primeiro?", numero2 % numero1 === 0)

//DESAFIO - 1
const kevinTemperatura = (77 - 32)*(5/9) + 273.15
const fahrenheitTemperatura = (80)*(9/5) + 32

const celsiusParaF = (30)*(9/5) + 32
const celsiusParaK = 30 + 273.15

const temperaturaUsuario = Number(prompt("Insira um valor de Grau Celsius para converter em F e K:"))

const celsiusF = (temperaturaUsuario)*(9/5) + 32
const celsiusK = temperaturaUsuario + 273.15

console.log("A temperatura de 77°F em Kevin é:", kevinTemperatura ,"°K")
console.log("A temperatura de 80°C em Fahrenheit é:", fahrenheitTemperatura, "°F")
console.log("A temperatura de 30°C em Fahrenheit e Kevin são, respectivamente:", celsiusParaF, "°F, e",celsiusParaK, "°K" )
console.log("A temperatura de", temperaturaUsuario,"°C em Fahrenheit e Kevin são, respectivamente:", celsiusF, "°F, e", celsiusK, "°K")

//DESAFIO - 2
const quilowattHora = Number(prompt("Informe qual o consumo de quilowatt consumida em sua residência:"))

console.log("Você pagará: R$", 280 * 0.05)
console.log("Você pagará: R$", quilowattHora * 0.05 * 0.15 ) //aqui apliquei o desconto de 15%

//DESAFIO - 3

// Letra a
console.log("20lb equivalem a", 20 * 0.45359237, "kg")

//Letra b
console.log("10.5oz equivalem a", 10.5 * 0.02834952, "kg")

//Letra c
console.log("100mi equivalem a", 100 * 1609 , "m")

//Letra d
console.log("50ft equivalem a", 50 / 3.2808, "m")

//Letra e
console.log("103.56gal equivalem a", 103.56 / 0.26417, "l")

//Letra f
console.log("450 xic equivalem a", 450 / 3.52, "l")

//Letra g
const milhas = Number(prompt("Informe o valor da unidade em milhas que deseja converter para metros:"))
console.log("Resultado:", milhas, "mi equivale a", milhas * 1609 ,"m")