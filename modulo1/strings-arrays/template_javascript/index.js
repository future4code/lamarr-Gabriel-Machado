//EXERCÍCIO DE INTERPRETAÇÃO - 1
let array
//console.log('a. ', array)
//vai retornar no terminal a palavra  undefined, pois não tem atribuição)

array = null
//console.log('b. ', array)
//vai retornar no terminal a palavra "null", pois foi atribuido valor à variavél array

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)
//vai retonrar no terminal o numero de elementos da minha variável array, nesse caso 11 elementos na lista

let i = 0
//console.log('d. ', array[i])
//vai retornar o valor do elemento que ocupa o indíce 0, nesse caso, o número 3

array[i + 1] = 19
//console.log('e. ', array)
//vai retornar no terminal a array com o numero 19 após o numero 3, pois esse foi substituído na atribuição acima

const valor = array[i + 6]
console.log('f. ', valor)
// irá retornaro número 9, pois ele ocupa a 6° posição na array (0+6)


//EXERCÍCIO DE INTERPRETAÇÃO - 2

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//A frase "Subi num ônibus em Marrocos" ficará: SUBI NUM ONIBUS EM MIRROCOS 27

//-------------------------------------------------------------------------------------

//EXERCÍCIO DE ESCRITA - 1

/*const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu e-mail?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Bem vindo(a) ${nome}!`)*/


//EXERCÍCIO DE ESCRITA - 2

/*const comidasPreferidas = ["lasanha", "macarrão", "purê", "pizza", "feijoada"]
console.log(comidasPreferidas)

console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const comidaUsuario = prompt("Qual a sua comida preferida?")
comidasPreferidas[0+1]= comidaUsuario

console.log('Nova array:', comidasPreferidas)*/

//EXERCÍCIO DE ESCRITA - 3

let listaDeTarefas

const tarefa1 = prompt("Qual a 1ª tarefa que você precisa realizar hoje:")
const tarefa2 = prompt("Qual a 2ª tarefa que você precisa realizar hoje:")
const tarefa3 = prompt("Qual a 3ª tarefa que você precisa realizar hoje:")
listaDeTarefas = [tarefa1, tarefa2, tarefa3]

console.log('Suas tarefas de hoje são:', listaDeTarefas)

const tarefaFeita = Number(prompt('Indique o número de qual tarefa você já realizou: 0- ${tarefa1}, 1- ${tarefa2}, 2- ${tarefa3} ?'))

listaDeTarefas.splice(tarefaFeita, 1)

console.log('Restam essas tarefas a serem feitas: ${listaDeTarefas}')


//DESAFIO - 1

const fraseUsuario = prompt("Escreva uma frase:")

array1 = fraseUsuario.split(" ")
console.log(array1)

//DESAFIO - 2

array2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const abacaxi = array2.indexOf('Abacaxi')

console.log('Indice da fruta Abacaxi em nossa array: ${abacaxi} , e o tamanho da array: ${array2.length}')