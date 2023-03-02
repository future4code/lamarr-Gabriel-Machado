//a. De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? Justifique (escreva no seu código como comentário)

// A função performAttack, pois ela é a que faz a lógica do ataque, e a função validateCharacter é apenas para validar os personagens.

//b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento

test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });
});

// c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento

test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return false;
  });
});
