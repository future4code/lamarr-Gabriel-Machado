console.log("exercicio 3");

const contas = [
  {
    email: "astrodev@labenu.com",
    password: "abc123",
  },
  {
    email: "bananinha@gmail.com",
    password: "bananinha",
  },
];

// conter 0 @ no email - includes
// conter 6 caracteres na senha - length

const login = (email, senha) => {
  const vEmail = contas.findIndex((i) => i.email === email);
  const vSenha = contas.findIndex((i) => i.password === senha);

  if (email.includes("@")) {
    if (vEmail !== -1) {
      if (senha.length >= 6) {
        if (vSenha !== -1) {
          return "login bem-sucedido";
        }
      } else {
        return "senha invalida";
      }
    } else {
      return "email ou senha incorretos";
    }
  } else {
    return "email invalido";
  }
};

console.log(login("astrodev@labenu.com", "abc123")); //login bem-sucedido
console.log(login("bananinha@gmail.com", "bananinha")); //login bem-sucedido
console.log(login("bananinha@gmail.com", "ba")) //senha invalida
console.log(login("bananinha", "bananinha")); //email invalido
console.log(login("bananinha@gmail.com", "deftones")); //email ou senha incorretos
