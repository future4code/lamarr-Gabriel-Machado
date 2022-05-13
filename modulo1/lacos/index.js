//Exercício de interpretação - 
//1)

/*O codigo irá definar um novo valor de para o "let i" seguindo as codições de continuação e irá somar
e atribuir esse valor à variavel "valor"*/

//Irá imprimir no console.log o resultado 10 

//2)
/* a) O que vai ser impresso no console?
Será impresso os números da lista maiores de 18, no caso, 19, 21, 23, 25, 27, e 30

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

Sim, o for of é suficiente, tiraria o if e dentro do bloco do laço eu criaria uma variavel para retornar o indice 
de cada elemento utilizando */

//3)
/*Qual seria o resultado impresso no console, se o usuário digitasse o número 4
Irá executar o while ate 4 vezes, e nessas 4 executações irá acrescentar um * na variavel lista conforme o proximo 
laço for. Ficará impresso dessa forma no console:
*
**
***
****
Ficará assim, pois em cada loop ele soma o * anterior com novo * da condição */

//Exercício de escrita
//1)

/* let quantidadeDeAnimais = Number(prompt("Quantos bichinhos você tem?"))
let listaDePets =[]
if (quantidadeDeAnimais === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidadeDeAnimais > 0){
    for (let i = 0; i < quantidadeDeAnimais; i++){
        let nomeDosPets = prompt(`Qual o nome do seu ${i+1}º/ª pet?`)
        listaDePets.push(nomeDosPets)
    }
    console.log(listaDePets)
} */

//2)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a)

/* function imprimeArray (array) {
    console.log(array)
}
imprimeArray(arrayOriginal) */

//b)

/* let novaArrayDividida = []

function divideElementosArray(array) {
    for (let i = 0; i < array.length; i++){
        const elemento = array[i];
        novaArrayDividida.push(elemento/10)
    }
    console.log(novaArrayDividida)
    
}
divideElementosArray(arrayOriginal) */

//c)

/* let arrayNumerosPares = []

function retornaNumerosPares (array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            arrayNumerosPares.push(array[i])
        }
    }
    console.log(arrayNumerosPares)
}

retornaNumerosPares(arrayOriginal) */

//d)

/* let arrayStrings = []
function stringsDaArray (array){
    for(let i = 0; i < array.length; i++){
        const frase = ` O elemento do índex ${i} é: ${array[i]}`
        arrayStrings.push(frase)
    }
    console.log(arrayStrings)
}

stringsDaArray(arrayOriginal) */

//e)

function imprimeMaiorEMenorArray (array){
    let maiorNumero = 0
    for(let i = 0; i < array.length; i++){
        let numeroAtual = array[i]
        if(numeroAtual >= maiorNumero){
            maiorNumero = numeroAtual
        } 
    } 
    const menorNumero = Math.min(...array)
    console.log(`O maior número é: ${maiorNumero}, e o menor número é: ${menorNumero}`)
}

imprimeMaiorEMenorArray(arrayOriginal)