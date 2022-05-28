/** EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
*/

console.log("Boas vindas ao jogo de Blackjack!");


const pergunta = prompt("Quer inicar uma nova rodada? ok ou cancelar.")
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
}

// "Usuário - cartas: Q♣️ 10♣️  - pontuação 20"
// "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
