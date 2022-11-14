enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    titulo: string
    anoLancamento: number,
    genero: GENERO
    pontuacao?: number
}

const conta = (nome: string, anoLancamento: number, genero: GENERO, pontuacao?: number) => {
    const filme: Filme = {
        titulo: nome,
        anoLancamento: anoLancamento,
        genero: genero,
        pontuacao: pontuacao
    }
    return filme
}
    
console.log(conta("O Poderoso Chefão", 1972, GENERO.DRAMA, 9.2))
       