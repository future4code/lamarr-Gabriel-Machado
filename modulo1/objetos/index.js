//EXERCICIO 1- INSTERPLETAÇÃO DE CODIGO

const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

/* A) No primeiro console irá imprimir: Matheus Nachtergaele,
no segundo console a ultima do elenco: Virginia Cavendish,
no terceiro console ira mostrar a array: canal: "Globo", horario: "14h" */

//2-
const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// A-no primeiro console: 
//  nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// no segundo console irá ser modificado o nome juba:
//  nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"
// no terceiro console irá ser modificado o 'a' pelo 'o' no nome
//     nome: "Jubo", 
//     idade: 3, 
//     raca: "SRD"

//B- é o spread ele faz uma copia do objeto que recebe os 3 pontos

//3-

function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//A-false e undefined
//B-o primeiro console diz false porque é o valor backender pedido por ele,
//já no segundo console pergunta a altura e o valor é undefield porque não tem a altura no objeto pessoa

//EXERCICIO DE ESCRITA
//1-A

const pessoa = {
    nome: "Ana",
    apelidos: ["Aninha", "nana", "nanda"]
}

function imprimeApelidos(objeto) {
    const frase = `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
    console.log(frase)
}
imprimeApelidos(pessoa)

//B-
const novosApelidos = {
    ...pessoa,
    apelidos: ["Anabel", "Anazinha", "Ananda"]
}

console.log(`Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]} ou ${novosApelidos.apelidos[2]}`)

//2-

const pessoa = {
    nome: "Gabriel",
    idade: 22,
    profissao: "estudante",
}

const pessoa2 = {
    nome: "Gustavo",
    idade: 25,
    profissao: "professor"
}

function retornandoArray (objetoRecebido) {
    const valorDeNome = objetoRecebido.nome
    const numeroDeCaracteresNome = objetoRecebido.nome.length
    const valorDeIdade = objetoRecebido.idade
    const valorDeProfissao = objetoRecebido.profissao
    const numeroDeCaracteresProfissao = objetoRecebido.profissao.length

    const arrayDosDados = [valorDeNome,numeroDeCaracteresNome,valorDeIdade,valorDeProfissao,numeroDeCaracteresProfissao]
    console.log(arrayDosDados)

}

retornandoArray(pessoa)
retornandoArray(pessoa2)

//3-

const carrinho = []
const fruta = {
    nome: "melancia",
    disponibilidade: true
}
const fruta2 = {
    nome: "acerola",
    disponibilidade: true
}
const fruta3 = {
    nome: "abacaxi",
    disponibilidade: true
}

function sacolao(frutas) {
    carrinho.push(frutas)
}

sacolao(fruta)
sacolao(fruta2)
sacolao(fruta3)

console.log(carrinho)

//DESAFIO
1-
function dadosUsusarios(){
    const nome = prompt("Qual seu nome?")
    const idade = Number(prompt("Qual sua idade?"))
    const profissao = prompt("Qual sua profissão?")
    const dados = {
        nome,idade,profissao
     }
     console.log(dados)
     console.log(typeof dados)
}
dadosUsusarios()

//2-

const filme = {
    nome: "interestelar",
    anoDeLancamento: 2014
}
const filme2 = {
    nome: "samuraiX",
    anoDeLancamento: 2012
}

function dados(primeiroFilme, segundoFilme){
    const comparandoLancamentoAntes = primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento
    const comparandoLancamentoMesmoAno = primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento
    const frase = `O primeiro filme foi lançado antes do segundo? ${comparandoLancamentoAntes}
O primeiro filme foi lançado no mesmo ano do segundo? ${comparandoLancamentoMesmoAno}`
    console.log(frase)
}

dados(filme, filme2)

//3-

function IndisponibilidadeFruta(frutaFalta){
    const indisponibilidade = !frutaFalta
    const frase = `Fruta ${frutaFalta.nome} está diposinivel: ${indisponibilidade}`
    console.log(frase)
}
IndisponibilidadeFruta(fruta2)