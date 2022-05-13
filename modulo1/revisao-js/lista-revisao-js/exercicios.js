// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}
console.log(retornaTamanhoArray)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}
console.log(retornaArrayInvertido)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}
console.log(retornaArrayOrdenado)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        }
    }
    return numerosPares
}
console.log(retornaNumerosPares);

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosAoQuadrado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            let numeroAoQuadrado = array[i] ** 2
            numerosAoQuadrado.push(numeroAoQuadrado)

        }
    }
    return numerosAoQuadrado
}
console.log(retornaNumerosParesElevadosADois)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = Math.max(...array)
    return maiorNumero
}
console.log(retornaMaiorNumero)

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objetoDosNumero = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.abs(num1 - num2),
    }
    return objetoDosNumero
}
console.log(retornaObjetoEntreDoisNumeros)

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
        return `Equilátero`
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return `Isósceles`
    } else {
        return `Escaleno`
    }
}
console.log(classificaTriangulo)

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    let novaArray = [];
    let segundoMaior = array.reverse();
    novaArray.push(segundoMaior[1], array.reverse()[1]);
    return novaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novoUsuario ={
        ...pessoa,
        nome : "ANÔNIMO"
    }
    return novoUsuario
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}