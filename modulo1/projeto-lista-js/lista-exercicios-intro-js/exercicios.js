// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("qual a altura:"))
  const largura = Number(prompt("qual a largura:"))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoDeNascimento = Number(prompt("em que ano você naceu?"))
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return(imc)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("qual seu nome?")
  let idade = prompt("qual sua idade?")
  let email = prompt("qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = (prompt("qual sua cor favorita?"))
  const cor2 = (prompt("qual sua segunda cor favorita?"))
  const cor3 = (prompt("qual sua terceira cor favorita?"))
  const coresFavoritas = [cor1,cor2,cor3]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const ingressosAVender = custo / valorIngresso
  return ingressosAVender

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoIgual = string1.length === string2.length
  return tamanhoIgual

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return (array[array.length-1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let primeiroNumero = array[0]
  let ultimoNumero = array.pop()
  array.push(primeiroNumero)
  array[0]= ultimoNumero
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoDeNascimento = Number(prompt("Em que ano você nasceu?"))
  const anoDeEmissaoRG = Number(prompt("Digite o ano de emissão do seu RG:"))
  let idade = anoAtual - anoDeNascimento
  let renovacao = anoAtual - anoDeEmissaoRG

  let condicao1 = idade <= 20 && renovacao >= 5 
  let condicao2 = idade >= 20 && idade <=50 && renovacao >= 10
  let condicao3 = idade > 50 && renovacao >= 15
  
  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  //Para ser bissexto, o ano deve ser:
  //Pode ser que seja divisível por 400, caso seja a divisão deve ser exata, deixando o resto igual a zero;
  const condicao1 = ano % 400 === 0
  //Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;
  const condicao2 = ano % 4 === 0
  //Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;
  const condicao3 = ano % 100 !== 0

  const AnoBissexto = condicao1 || condicao2 && condicao3
  return AnoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const maisDe18Anos = prompt("Você tem mais de 18 anos? (responda sim ou não)")
  const ensinoMedio = prompt("Você possui ensino médio completo? (responda sim ou não)")
  const PossuiDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (reponda sim ou não)")

  let confirmacaoDeIdade = maisDe18Anos === "sim"
  let confirmacaoDeEnsino = ensinoMedio === "sim"
  let confirmacaoDeDisponibilidade = PossuiDisponibilidade === "sim"


  console.log(confirmacaoDeIdade && confirmacaoDeEnsino && confirmacaoDeDisponibilidade)

}