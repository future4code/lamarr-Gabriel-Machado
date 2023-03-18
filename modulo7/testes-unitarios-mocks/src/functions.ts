import { Character } from "./models/models";

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false;
  }

  return true;
};

// export function performAttack(
//   attacker: Character,
//   defender: Character,
// ) {
//   if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//     throw new Error("Invalid character");
//   }

//   if (attacker.strength > defender.defense) {
//     defender.life -= attacker.strength - defender.defense;
//   }
// }

//b. Implemente a função utilizando inversão de dependências

export function performAttack(
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
}

//c. Explique, com as suas palavras, as diferenças entre as duas implementações (escreva no seu código como comentário)

// A primeira implementação é mais simples, pois não é necessário criar uma nova função para validar os personagens. Porém, a segunda implementação é mais flexível, pois é possível criar uma função de validação para cada tipo de personagem, por exemplo, um personagem que não pode ter vida negativa.


