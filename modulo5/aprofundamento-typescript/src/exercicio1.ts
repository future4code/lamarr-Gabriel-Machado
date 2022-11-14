console.log('exercicio 1')

// const minhaString: string = 10

//a) da o erro "Type 'number' is not assignable to type 'string'", pois o tipo da variavel é string e não number

const MeuNumero: number | string = 10

//B) usamos o pipe para dizer que pode ser um ou outro

//C) E D) 

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES
}

enum CORES {
    VERMELHO = 'vermelho',
    AZUL = 'azul',
    AMARELO = 'amarelo',
    VERDE = 'verde'
}

const pessoa1: pessoa = {
    nome: 'João',
    idade: 20,
    corFavorita: CORES.AMARELO
}

const pessoa2: pessoa = {
    nome: 'Maria',
    idade: 30,
    corFavorita: CORES.VERMELHO
}

const pessoa3: pessoa = {
    nome: 'José',
    idade: 40,
    corFavorita: CORES.VERDE
}