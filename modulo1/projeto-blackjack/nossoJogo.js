/** EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
*/

<<<<<<< HEAD
/*console.log("Boas vindas ao jogo de Blackjack!");

let usuariopontuacao1 = comprarCarta()
let usuariopontuacao2 = comprarCarta()
let somaUsuario = usuariopontuacao1.valor + usuariopontuacao2.valor

let pcpontuacao1 = comprarCarta()
let pcpontuacao2 = comprarCarta()
let somaPc = pcpontuacao1.valor + pcpontuacao2.valor

if(confirm("Quer inicar uma nova rodada? ok ou cancelar.")) {
   console.log(`Usuário - cartas: ${usuariopontuacao1.texto} ${usuariopontuacao2.texto} - pontuação ${somaUsuario}`)
   console.log(`Computador - cartas: ${pcpontuacao1.texto} ${pcpontuacao2.texto} - pontuação ${somaPc}`)
   if(somaUsuario > somaPc){
      console.log(`Usuário ganhou!`)
   } else if (somaPc > somaUsuario){
      console.log(`Computador ganhou!`)
   } else if(somaUsuario === somaPc){
      console.log(`Empate!`)
   }
} else {
   console.log("O jogo acabou.")
}*/

// "Usuário - cartas: Q♣️ 10♣️  - pontuação 20"
// "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
=======

console.log("Boas vindas ao jogo de Blackjack!");

const pergunta = prompt("Quer inicar uma nova rodada? ok ou cancelar.")

if (confirm(pergunta === "ok")) {
   console.log("iniciar o jogo")
} else if (pergunta === "cancelar") {
   console.log("O jogo acabou")
} else {
   console.log("escolha denovo")
}

let usuariopontuacao1 = comprarCarta()
let usuariopontuacao2 = comprarCarta()

let pcpontuacao = comprarCarta()
let pcpontuacao = comprarCarta()

console.log(carta.texto)
console.log(carta.valor)


console.log
   (`usuario - cartas: ${carta.texto} - pontuação ${carta.valor}
Computador - cartas: ${carta.texto} - pontuação ${carta.valor}`)
   switch (carta === "empate") {
   case (usuariopontuacao === pcpontuacao):
      console.log("empate")
      break;
   case (cartausuariopontuação > pcpontuacao):
      console.log("O usuário ganhou!")
      break;
   case (pcpontuacao > usuariopontuação):
      console.log("O computador ganhou!")
      break;
   default: console.log("tente novamente")
      break;
}

// "Usuário - cartas: Q♣️ 10♣️  - pontuação 20"
// "Computador - cartas: Q♣️ 10♣️  - pontuação 20"

>>>>>>> master
