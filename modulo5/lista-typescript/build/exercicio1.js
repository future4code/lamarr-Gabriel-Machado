console.log("exercicio1");
const mostraFrase = (string, data) => {
    const dataSplit = data.split("-");
    const frase = `Olá me chamo ${string}, nasci no dia ${dataSplit[0]} do mês de ${dataSplit[1]} do ano de ${dataSplit[2]}`;
    return (frase);
};
console.log(mostraFrase("Gabriel", "02-09-1999"));
//# sourceMappingURL=exercicio1.js.map