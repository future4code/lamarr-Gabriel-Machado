import { performAttack, validateCharacter } from "../src/functions";
import { Character } from "../src/models/models";

test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for life 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for strength 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 0,
    defense: 500,
  });

  expect(result).toBe(false);
});

test("Should return false for defense 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 300,
    defense: 0,
  });

  expect(result).toBe(false);
});

test("Should return false for negative life or negative strength or negative defense", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: -1500,
    strength: -300,
    defense: -500,
  });

  expect(result).toBe(false);
});

test("Should return true for valid character", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});

//a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.

test("Should perform attack", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });

  const attacker: Character = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Sub-Zero",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  performAttack(attacker, defender, validatorMock);

  expect(defender.life).toEqual(1300);
  expect(validatorMock).toHaveBeenCalled();
  expect(validatorMock).toHaveBeenCalledTimes(2);
  expect(validatorMock).toHaveReturnedTimes(2);
});

// b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou. 

test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock);
    } catch (err: any) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
