function calculaPreco(nome, tipoDeJogo, etapaDoJogo, categoria, qtdIngressos, valorIngresso, valorTotal) {
    nome = prompt("Qual seu nome ?")
    tipoDeJogo = prompt("Qual o tipo de jogo ? (IN para internacional; e DO para doméstico)")
    etapaDoJogo = prompt("Qual a etapa ? (SF para semi-final; DT para decisão de terceiro lugar; e FI para final)")
    categoria = prompt("Qual a categoria do jogo ? (1, 2, 3 ou 4)")
    qtdIngressos = Number(prompt("Quantos ingressos ?"))
    console.log(`
 -- Dados da Compra --
 Nome do cliente: ${nome}
 Tipo de jogo: ${tipoDeJogo}
 Etapa do jogo: ${etapaDoJogo}
 Categoria: ${categoria}
 Quantidade de Ingressos: ${qtdIngressos}
 -- Valores --
 `)
    switch (etapaDoJogo) {
       case "SF":
          switch (categoria) {
             case '1':
                valorIngresso = 1320
                break;
             case '2':
                valorIngresso = 880
                break;
             case '3':
                valorIngresso = 550
                break;
             case '4':
                valorIngresso = 220
                break;
             default: console.log("Categoria não informada")
          }
          break;
 
       case "DT":
          switch (categoria) {
             case '1':
                valorIngresso = 660
                break;
             case '2':
                valorIngresso = 440
                break;
             case '3':
                valorIngresso = 330
                break;
             case '4':
                valorIngresso = 170
                break;
             default: console.log("Categoria não informada")
          }
          break;
 
       case "FI":
          switch (categoria) {
             case '1':
                valorIngresso = 1980
                break;
             case '2':
                valorIngresso = 1320
                break;
             case '3':
                valorIngresso = 880
                break;
             case '4':
                valorIngresso = 330
                break;
             default: console.log("Categoria não informada")
          }
          break;
 
       default: console.log("Etapa não informada")
    }
    valorTotal = valorIngresso * qtdIngressos
    if (tipoDeJogo === "DO")
       console.log(`Valor do ingresso: ${valorIngresso}
 Valor total: ${valorTotal}`)
    else if (tipoDeJogo === "IN")
       console.log(`Valor do ingresso: ${valorIngresso / 4.1}
 Valor total: ${valorTotal / 4.1}`)
 
 }
 calculaPreco()