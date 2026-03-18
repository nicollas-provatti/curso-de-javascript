# 📘 Aula 3 – Estrutura de Decisão - Parte II

---

## 🔵 O comando `else if`
O comando `else if` é uma extensão do comando `if-else` que permite adicionar múltiplas condições em sequência. Ele é usado quando há mais de duas possibilidades de fluxo de controle no programa e queremos testar várias condições, uma após a outra.

**Sintaxe:**
```js
if (condição1) {
    // Código se condição1 for verdadeira
} else if (condição2) {
    // Código se condição2 for verdadeira
} else {
    // Código se nenhuma das condições anteriores for verdadeira
}
```

**Como funciona ?**
O programa avalia a condição1. Se condição1 for verdadeira, o bloco de código associado é executado, e todas as outras condições são ignoradas. Se condição1 for falsa, o programa avalia a condição2. Se condição2 for verdadeira, o bloco de código associado é executado, e todas as outras condições são ignoradas. Se todas as condições forem falsas, o bloco de código associado ao `else` é executado.


**Exemplo:**
```js
let idade = 16;
if (idade < 0) {
    console.log("Idade inválida.");
} else if (idade >= 18) {
    console.log("Maior de idade");
}else {
    console.log("Menor de idade");
}
```

**Observações:**
- As condições são avaliadas em sequência, e a execução **para na primeira condição verdadeira**. Diferente se tivéssemos vários comandos `if`.
* O bloco `else` é opcional, mas é **uma boa prática** incluí-lo para lidar com casos onde todas as outras condições são falsas.

---

## 🔵 O comando `switch`
O comando `switch` é uma estrutura de controle de fluxo que permite a execução de diferentes blocos de código com base no valor de uma variável. Ele é particularmente útil quando se deseja **comparar a mesma variável com diferentes valores** de maneira eficiente.

**Sintaxe:**
```js
switch (variável) {
    case valor1:
        // Código a ser executado se a variável for igual a valor1
        break;
    case valor2:
        // Código a ser executado se a variável for igual a valor2
        break;
    default:
        // Código a ser executado se a variável não corresponder a nenhum caso
}
```

**Como funciona ?**
O programa avalia a variável dentro dos parênteses após `switch`. O valor da variável é comparado sequencialmente com cada `case`. Quando uma correspondência é encontrada, o bloco de código associado ao `case` correspondente é executado. A instrução `break` termina a execução do bloco de código do `case` atual e impede que o controle passe para o próximo `case`.
Se nenhum dos cases corresponder ao valor da expressão, o bloco de código dentro de `default` é executado.


**Exemplo:**
```js
let dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
}
```

**Observação:**
- Cada `case` **deve terminar** com uma instrução `break` para evitar que o controle passe para o próximo case (efeito conhecido como "fall through").

* O bloco `default` é opcional, mas é uma **boa prática** incluí-lo para lidar com valores inesperados.

- O comando `switch` é mais eficiente que uma série de comandos `if-else` quando se trata de comparar **a mesma variável** com **vários valores diferentes**.

---

## 🔵 Boas práticas no uso de decisões
- **Evite usar muitas condições aninhadas:** Em vez de muitos `if-else` dentro de outros `if-else`, considere usar `switch-case` ou criar funções para tornar o código mais legível.

* **Use a estrutura mais apropriada:** Se você tiver apenas duas opções (verdadeiro ou falso), o `if-else` é a melhor escolha. Se você tiver muitas opções, o `switch-case` é mais limpo.

- **Mantenha o código organizado:** Sempre use chaves `{}` mesmo que haja apenas uma linha de código dentro de um bloco condicional. Isso ajuda a evitar erros futuros e torna o código mais fácil de manter.

* **Cuidado com a condição no if:** Evite expressões complexas ou difíceis de entender. Torne as condições simples e claras.

---
