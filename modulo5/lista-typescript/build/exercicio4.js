var Setores;
(function (Setores) {
    Setores["MARKETING"] = "marketing";
    Setores["VENDAS"] = "vendas";
    Setores["FINANCEIRO"] = "financeiro";
})(Setores || (Setores = {}));
const funcionarios = [
    { nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: Setores.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: Setores.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: Setores.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: Setores.MARKETING, presencial: true }
];
const funcionarioMarketing = funcionarios.filter((funcionario) => {
    return funcionario.setor === Setores.MARKETING && funcionario.presencial === true;
});
console.log(funcionarioMarketing);
//# sourceMappingURL=exercicio4.js.map