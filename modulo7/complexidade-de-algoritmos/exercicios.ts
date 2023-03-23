//exercicio 1
// const findFirstRecurringCharacter = (input) => {
//     const charHashMap = {};
//     for (const char of input) {
//       if (charHashMap[char] === true) {
//         return char;
//       }
//       charHashMap[char] = true;
//     }
//     return null;
//   }; 
//R: Sendo n o tamanho da string input, complexidade é: o(n)

//exercicio 2
export const func = (
    source: string,
    comparison: string
  ): boolean => {
    if (
      comparison.length > source.length + 1 ||
      comparison.length < source.length - 1
    ) {
      return false;
    }
    let commonCharQuantity = 0;
  
    for (const char of comparison) {
      if (source !== comparison) {
        commonCharQuantity++;
      }
    }
    return (
      commonCharQuantity <= source.length + 1 &&
      commonCharQuantity >= source.length - 1
    );
  };

//R: Sendo n o tamanho da string comparison, complexidade é: o(n)

//exercicio 3
export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
  ): void => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
    ) {
      throw new Error("Fora do intervalo da matriz");
    }
  
    matrix[rowIndex][columnIndex] = value;
  };

//R: complexidade é: o(1)

//exercicio 4
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
      }
    }
    return false;
  }

//R: Sendo n o tamanho da lista listOfNumbers, complexidade é: o(n^2)

//exercicio 5
// Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade

//R: Da maior eficiência/performance para a menor: 3 → 1 = 2 → 4
