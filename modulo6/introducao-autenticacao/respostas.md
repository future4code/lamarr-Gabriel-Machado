1- a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

resposta: Acho que usar strings para representar os ids é melhor do que usar números, pois é mais fácil de identificar o que é cada id.

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 

resposta: function generateId() {
  return v4();
}

2- a) O que a linha as string faz? Por que precisamos usar ela ali?

resposta: A linha as string faz com que o id seja uma string, pois o id é gerado como um número.

b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

resposta: function generateToken(id: string): string {
  const token: string = jwt.sign(
    {
      id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  return token;
}

6- a) O que a linha as any faz? Por que precisamos usá-la ali?

resposta: A linha as any faz com que o objeto seja do tipo any, pois o objeto é do tipo desconhecido.

