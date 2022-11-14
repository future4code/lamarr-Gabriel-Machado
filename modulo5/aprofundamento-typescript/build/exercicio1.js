console.log('exercicio 1');
const MeuNumero = 10;
var CORES;
(function (CORES) {
    CORES["VERMELHO"] = "vermelho";
    CORES["AZUL"] = "azul";
    CORES["AMARELO"] = "amarelo";
    CORES["VERDE"] = "verde";
})(CORES || (CORES = {}));
const pessoa1 = {
    nome: 'João',
    idade: 20,
    corFavorita: CORES.AMARELO
};
const pessoa2 = {
    nome: 'Maria',
    idade: 30,
    corFavorita: CORES.VERMELHO
};
const pessoa3 = {
    nome: 'José',
    idade: 40,
    corFavorita: CORES.VERDE
};
//# sourceMappingURL=exercicio1.js.map