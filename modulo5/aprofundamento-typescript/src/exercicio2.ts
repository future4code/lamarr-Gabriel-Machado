console.log("exercicio 2")

// a) entradas: numeros, saídas: estatisticas

type amostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => estatisticas
}

type estatisticas = {
    maior: number,
    menor: number,
    media: number
}

const amostraDeIdades: amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    
    obterEstatisticas: (numeros: number[]) => {
        const numerosOrdenados: number[] = numeros.sort(
            (a: number, b: number) => a - b
        )
        let soma: number = 0
        for (let num of numeros) {
            soma += num
        }
        const estatisticas: estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
        return estatisticas
    }
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))

