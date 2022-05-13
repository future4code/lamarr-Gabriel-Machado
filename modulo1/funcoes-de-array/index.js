exercicio de interpletação
1) irá imprimir os 3 objetos um abaixo do outro
2) irá imprimir somente o item nome dos objetos pois a função esta retornando apenas o item nome
3) irá filtrar para aparecer todos os objetos que tenham o apelido diferente de "Chijo"

exercicio de escrita
1 a)
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const petsDogs = pets.map((item) => {
    return item.nome
})

console.log(petsDogs);

b)

const salsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})

console.log(salsicha);

c)

const Poodle = pets.filter((item) => {
    return item.raca === "Poodle"
})

const dogsPoodle = Poodle.map((item) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
})

2 a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

let itemProdutos = produtos.map((item) => {
    console.log(item.nome)
})

b)

let novoPreco = produtos.map((item) => {
    return { nome: item.nome, preco: (item.preco * 0.95).toFixed(2) }
})

console.log(novoPreco);

c)

let Bebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(Bebidas);

d)

let ipe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

console.log(ipe);

e)
let produtosYpe = ipe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(produtosYpe);

DESAFIO

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

 a)

let ordemAlfabetica = pokemons.map((item) => {
    return item.nome
}).sort()

console.log(ordemAlfabetica)

b)

let tiposDePokemons = pokemons.map((item) => {
    return item.tipo
})

let filtroTiposRepetidos = tiposDePokemons.filter((item, indice) => {
    return tiposDePokemons.indexOf(item) === indice
})

console.log(filtroTiposRepetidos)