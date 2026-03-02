let nome;
let nota1, nota2, nota3;
let media;

nome = prompt("Qual o seu nome ?");

nota1 = prompt("Digite a primeira nota:");
nota2 = prompt("Digite a segunda nota: ");
nota3 = prompt("Digite a terceira nota: ");

media = (nota1 + nota2 + nota3) / 3;

console.log("A média final de " + nome + " foi " + media);