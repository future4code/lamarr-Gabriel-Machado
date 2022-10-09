console.log("exercicio 4");

const primeiraLista = [
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
  {
    nome: "Laranja",
  },
];

const segundaLista = [
  {
    nome: "Laranja",
  },
  {
    nome: "Cebola",
  },
];

// juntar - ok
// excluir duplicados -ok

const gerarItensUnicos = (primeiraLista, segundaLista) => {
  let itens = primeiraLista.concat(segundaLista);
  let itensUnicos = [];
  itens.forEach((item) => {
    itensUnicos.forEach((i) => {
      if (i.nome === item.nome) 
        itensUnicos.splice(itensUnicos.indexOf(i), 1);
    });
    itensUnicos.push(item);
  });
  return itensUnicos;
};

console.log(gerarItensUnicos(primeiraLista, segundaLista));

// let itensUnicos = [];
//   itens.forEach((item) => {
//     let isUnico = true;
//     itensUnicos.forEach((itemUnico) => {
//       if (itemUnico.nome === item.nome) isUnico = false;
//     });
//     if (isUnico) itensUnicos.push(item);
//   });


// let itensUnicos = [];
//   itens.forEach((item) => {
//     itensUnicos.forEach((i) => {
//       if (i.nome === item.nome) {
//         itensUnicos.splice(itensUnicos.indexOf(i), 1);
//         }
//     });
//     itensUnicos.push(item);
//     });