console.log("cadastro de cliente");

let clientes = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

function inserirCliente(cliente) {
  let i = clientes.findIndex((obj) => obj.id === cliente.id);
  if (i < 0) {
    clientes.push(cliente);
    return clientes;
  } else {
    return console.log(`Erro! ${cliente.id} está sendo usado.`);
  }  
}

function  listarClientes() {
  console.log(clientes);
}



inserirCliente({ id: 5, nome: "Ciclaninha" });
listarClientes();


