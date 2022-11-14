var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
const conta = (nome, anoLancamento, genero, pontuacao) => {
    const filme = {
        titulo: nome,
        anoLancamento: anoLancamento,
        genero: genero,
        pontuacao: pontuacao
    };
    return filme;
};
console.log(conta("O Poderoso Chefão", 1972, GENERO.DRAMA, 9.2));
//# sourceMappingURL=exercicio3.js.map