/* 
Sistemas de Notas

- Se a nota for maior ou igual a 7 E menor ou igual a 10 ->  APROVADO!
- Se a nota for maior ou igual a 4 E menor que 7 -> RECUPERAÇÃO!
- Se a nota for maior ou igual a 0 E menor que 4 -> REPROVADO!

1. [7, 10]
2. [4, 7)
3. [0, 4)
*/

let nota = 2;

if (nota >= 7 && nota <= 10) {
  console.log("APROVADO(A)!");
} else if (nota >= 4 && nota < 7) {
  console.log("RECUPERAÇÃO!");
} else if (nota >= 0 && nota < 4){
  console.log("REPROVADO(A)!");
} else {
  console.log("NOTA INVÁLIDA!");
}