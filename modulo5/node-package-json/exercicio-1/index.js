const nome = process.argv[2];
const idade = Number(process.argv[3]);

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
console.log(`Em sete anos você terá ${idade + 7}`);