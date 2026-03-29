# 📘 Aula 4 - Função 

---

## 🔍 O que são funções ?
Em JavaScript, funções são **blocos de código** que **realizam uma tarefa específica** ou **retornam um valor**. Elas servem para organizar o programa, evitar repetição de código e facilitar a manutenção.
A ideia é que você escreva o código uma vez dentro da função e possa chamar esse código sempre que precisar, apenas pelo nome da função.

Podemos pensar numa função como uma máquina:

- Você fornece **entradas** (chamadas de **parâmetros**),
- A função **processa** essas entradas,
- E te devolve uma **saída** (o que chamamos de **retorno**).

---

## 🔵 Declaração e Chamada de Funções

### 🔹 Declaração
Declarar uma função significa **criar** a função, ou seja, **definir** o que ela vai fazer.
A declaração básica de uma função é feita assim:

```js
function nomeDaFuncao() {
    // bloco de código
}
```

- `function` → palavra-chave que indica que estamos criando uma função.

* `nomeDaFuncao` → é o **nome** da função (escolha nomes que representem o que a função faz).

- `{}` → dentro dessas chaves fica o **bloco de código** que será executado.

**Exemplo:**
```js
function mostrarMensagem() {
    console.log('Esta é uma função!');
}
```

Nesse exemplo, a função `mostrarMensagem` foi **declarada**, mas ainda não foi executada.

<div style="height: 1px"></div>

### 🔹 Chamada
Para chamar (executar) uma função, basta **escrever o nome da função seguido de parênteses**:

```js
mostrarMensagem();
```

Quando você chama a função, o JavaScript **executa** o que está dentro dela.

**Exemplo:**
```js
function apresentar() {
    console.log('Meu nome é Ana!');
}

apresentar(); // Chama a função e imprime: Meu nome é Ana!
apresentar(); // Pode chamar quantas vezes quiser
```

---

## 🔵 Parâmetro e Retorno

### 🔹 Parâmetros
Parâmetros são **valores que a função recebe** para usar dentro do seu bloco de código. Eles funcionam como variáveis locais que existem apenas dentro da função.

**Exemplo:**
```js
function cumprimentar(nome) {
    console.log('Olá, ' + nome + '!');
}
```

Nesse exemplo, `nome` é o **parâmetro** da função `cumprimentar`. Quando chamarmos a função, precisamos **enviar** um valor para o parâmetro.

```js
cumprimentar('Ana'); // Saída: Olá, Ana!
cumprimentar('João'); // Saída: Olá, João!
```

Já o valor que é passado dentro dos parênteses da chamada da função é chamado de argumento. Portanto: 
- **Parâmetro** → é o que você define na função.
- **Argumento** → é o que você passa quando chama a função.

<div style="height: 1px"></div>

### 🔹 Retorno
Uma função pode retornar um valor usando a palavra-chave `return`. O `return` encerra a função e envia um valor de volta para quem chamou.

**Exemplo:**
```js
function somar(a, b) {
    return a + b;
}

let resultado = somar(3, 4);
console.log(resultado); // Saída: 7
```

Nesse exemplo, `a` e `b` são parâmetros. `return a + b;` envia o valor da soma de volta para quem chamou a função.

#### **Observação:**
Se você não usar `return`, a função apenas executa comandos, mas não devolve nada.

**Exemplo:**
```js
function exibirMensagem() {
    console.log('Executando uma função sem retorno!');
}
```

---

### 🔵 Escopo de Variável
Escopo é o lugar onde uma variável é visível e acessível no código. No JavaScript, existem três tipos principais de escopo:

<div style="height: 1px"></div>

### 🔹 Escopo Global
Quando a variável é criada **fora de qualquer função ou bloco**. Logo, pode ser acessada de qualquer parte do código.

**Exemplo:**
```js
let cor = 'azul'; // variável global

function mostrarCor() {
    console.log(cor);
}

mostrarCor(); // azul
console.log(cor); // azul
```

<div style="height: 1px"></div>

### 🔹 Escopo de Função
Quando a variável é criada **dentro de uma função**. Logo, só existe dentro daquela função.

**Exemplo:**
```js
function mostrarMensagem() {
    let mensagem = 'Olá!';
    console.log(mensagem);
}

mostrarMensagem(); // Olá!
console.log(mensagem); // ❌ Erro: mensagem não existe aqui
```

<div style="height: 1px"></div>

### 🔹 Escopo de Bloco
Um bloco é tudo que está dentro de `{ }`. Com `let` e `const`, variáveis só existem dentro do bloco onde foram criadas.

**Exemplo:**
```js
{
    let idade = 25;
    console.log(idade); // 25
}
console.log(idade); // ❌ Erro: idade não existe aqui
```

```js
let numero = 10;
if (numero > 0) {
    let mensagem = "Positivo";
}
console.log(mensagem); ❌ Erro: mensagem não existe aqui
```

Nesse exemplo, a variável `mensagem` só existe dentro do bloco `if`, onde foi declarada.

---

## 🔵 Valor Padrão para Parâmetros
Às vezes, queremos que uma função use valores padrão se o usuário **não informar** algum argumento. Antes do ES6, era necessário fazer isso "manualmente".

<div style="height: 1px"></div>

### 🔹 Formas antes do ES6

**Estratégia 1:**
```js
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(soma1(2, 3, 4)); // 9
console.log(soma1(2, 3));    // 6
console.log(soma1(2));       // 4
console.log(soma1());        // 3
```

Nesse exmplo, se `a`, `b` ou `c` forem **falsy** (`undefined`, `null`, `0`, '', etc.), eles serão substituídos por `1`.

**Problema:** se passarmos `0` como valor (que é um número válido), o `0` será considerado **falso**, e o valor padrão será usado errado.

```js
console.log(soma1(0, 0, 0)); // Vai imprimir 3 (não 0), o que é um bug.
```

**Estratégias 2, 3 e 4:**
```js
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;  // Se a for diferente de undefined
    b = 1 in arguments ? b : 1;   // Se existir o argumento b na função
    c = isNaN(c) ? 1 : c;         // Se c não for um número, usa 1

    return a + b + c;
}
```

Nesse exemplo, mesmo se passarmos `0`, ele é considerado válido.

<div style="height: 1px"></div>

### 🔹 Forma depois do ES6
Com o ES6, podemos declarar o valor padrão direto nos parâmetros da função:

**Exemplo:**
```js
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}
```

Nesse exemplo, se o usuário não informar o argumento, ou informar `undefined`, o valor padrão será usado. Diferente da forma antiga, se passarmos `0`, ele respeita o `0`.

---