# 📘 Aula 3 – Estruturas de Controle: Decisão - Parte I

---

## 🔍 O que são comandos de decisão ?
Os comandos de decisão, também conhecidos como estruturas condicionais, são instruções que permitem ao programa **tomar diferentes caminhos** com base em **condições específicas**. Eles são essenciais para controlar o fluxo de execução do programa, permitindo que ele reaja de maneira diferente a diferentes entradas ou estados.

---

## 🔵 O comando `if`
O comando `if` é uma estrutura condicional que permite ao programa **executar um bloco** de código apenas se uma condição específica for **verdadeira**. 

**Sintaxe:**
```js
if (condição) {
    // Código a ser executado se a condição for verdadeira
}
```

**Como funciona ?**
O programa avalia a expressão dentro dos parênteses após `if`. Se a condição for verdadeira, o bloco de código entre as chaves `{}` é executado. Se a condição for falsa, o bloco de código entre as chaves `{}` é ignorado.

**Exemplo:**
```js
let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
}
```

**Observação:**
Se você tiver vários comandos `if`, **todos** eles serão analisados individualmente. Isso significa que cada condição será avaliada, independentemente das outras.

---

## 🔵 O comando `if-else`
O comando `if-else` é uma extensão do comando `if` que permite especificar um **bloco de código alternativo** a ser executado quando a condição `if` é falsa. Ele é usado para criar uma ramificação no fluxo do programa, onde uma condição determina qual bloco de código será executado.

**Sintaxe:**
```js
if (condição) {
    // Código se a condição for verdadeira
} else {
    // Código se a condição for falsa
}
```

**Como funciona ?**
O programa avalia a expressão dentro dos parênteses após `if`. Se a condição for verdadeira, o bloco de código entre as primeiras chaves `{}` é executado. Se a condição for falsa, o bloco de código entre as segundas chaves `{}` é executado.

**Exemplo:**
```js
let idade = 16;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

**Observações:**
- O bloco de código dentro do `else` é executado **apenas** se a condição do `if` for falsa.
* O `else` **não pode existir** sem um `if` correspondente.

---
