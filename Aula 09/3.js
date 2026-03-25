for (let contador = 1; contador <= 5; contador++) {
  let numero = Number(prompt("Digite o " + contador + "° número: "));

  if (numero > 10) {
    console.log("O número é maior que 10.");
  } else if (numero < 10) {
    console.log("O número é menor que 10.");
  } else {
    console.log("O número é 10.");
  }
}