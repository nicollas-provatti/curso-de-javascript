## 📘 Aula 1 - Introdução

### 🔍 O que o JavaScript é capaz de fazer ?
JavaScript é uma linguagem de programação extremamente poderosa e versátil. Originalmente criada para trazer interatividade às páginas web, ela evoluiu ao ponto de ser usada tanto no **frontend** (o que o usuário vê) quanto no **backend** (o que acontece por trás dos bastidores do site).

<div style="height: 1px"></div>

#### 🔹 No Frontend (navegador), o JavaScript pode

- Criar interações dinâmicas, como abrir e fechar menus;
- Atualizar o conteúdo da página sem recarregar (usando AJAX ou Fetch API);
- Validar formulários antes de enviar;
- Criar animações e efeitos visuais;
- Controlar eventos do usuário (cliques, digitação, rolagem, etc.);
- Construir aplicações completas com frameworks como **React**, **Vue** ou **Angular**.

<div style="height: 1px"></div>

#### 🔹 No Backend (servidor), o JavaScript pode

- Criar servidores web e APIs usando **Node.js**;
- Acessar bancos de dados (como MongoDB, MySQL, PostgreSQL);
- Processar requisições e respostas de usuários;
- Construir sistemas completos como e-commerces, redes sociais e muito mais.

<div style="height: 1px"></div>

#### 🔹 Em outras áreas

- Aplicativos móveis com React Native;
- Aplicações desktop com Electron (como o Visual Studio Code);
- Automação de tarefas (scripts);
- Desenvolvimento de jogos;
- Internet das Coisas (IoT);
- Machine Learning com bibliotecas como TensorFlow.js.

---

### 🔵 Cliente e Servidor
Quando acessamos um site, como por exemplo `www.exemplo.com`, estamos na verdade interagindo com **dois lados diferentes de um sistema**: o **cliente** e o **servidor**. Entender essa relação é fundamental para compreender onde o JavaScript pode atuar.

<div style="height: 1px"></div>

#### 🔹 Cliente (Client-side)
O cliente é o **navegador do usuário** (como Chrome, Firefox, Edge). Ele é responsável por:

- Exibir as páginas web;
- Executar códigos JavaScript no próprio navegador;
- Mostrar o que o servidor enviou (HTML, CSS, JS, imagens etc.);
- Interagir com o usuário (cliques, formulários, animações, etc.).

**Exemplo:** quando você clica num botão e a cor da página muda, isso é JavaScript rodando no cliente.

<div style="height: 1px"></div>

#### 🔹 Servidor (Server-side)
O servidor é um **computador remoto** que armazena os arquivos do site e responde às solicitações dos usuários. Ele é responsável por:

- Receber pedidos (requisições) do cliente;
- Processar dados e lógica de negócio;
- Consultar e armazenar informações em bancos de dados;
- Enviar respostas (geralmente em formato HTML, JSON, etc.).

**Exemplo:** quando você faz login num site, o servidor verifica seu usuário e senha no banco de dados e responde se está tudo certo.

<div style="height: 1px"></div>

#### 🔹 Como eles se comunicam?

- O cliente (navegador) envia uma requisição para o servidor (ex: "me mande a página inicial").
- O servidor processa a requisição e envia uma resposta com os dados (HTML, CSS, JS).
- O cliente recebe esses dados e exibe o site para o usuário.
- A partir daí, o JavaScript pode continuar executando diretamente no cliente, sem depender do servidor o tempo todo.

<div style="height: 1px"></div>

#### 🔹 Onde o JavaScript entra?

|Ambiente	|Uso do JavaScript|
|-----------|-----------------|
|Cliente (Frontend)	|Interações com o usuário, animações, validações, DOM|
|Servidor (Backend)	|Processamento de dados, APIs, acesso ao banco de dados (com Node.js)|

---

### 🔵 Website
Para criar um site funcional e moderno, usamos **três tecnologias principais** que trabalham juntas como uma equipe:

<div style="height: 1px"></div>

#### 🧱 HTML – Estrutura
HTML (HyperText Markup Language) é a **estrutura básica** de uma página. Ele define o que vai aparecer, como títulos, parágrafos, imagens, botões, etc.

<div style="height: 1px"></div>

#### 🎨 CSS – Estilo
CSS (Cascading Style Sheets) é usado para deixar a página **bonita e estilizada**. Ele define como os elementos HTML vão aparecer: cores, tamanhos, fontes, alinhamentos, etc.

<div style="height: 1px"></div>

#### 🧠 JavaScript – Comportamento
JavaScript é a parte lógica: permite **interações** com o usuário, animações, validações e muito mais. Ele adiciona inteligência e dinamismo à página.

<div style="height: 1px"></div>

#### 🔹 Trabalhando Juntos
Vamos ver como essas três partes se unem em um único exemplo:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Meu Site</title>
    <style>
      button {
        background-color: green;
        color: white;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
    <button>Clique aqui</button>

    <script>
      document.querySelector("button").onclick = function () {
        alert("Você clicou!");
      };
    </script>
  </body>
</html>
```
Nesse exemplo:

- O HTML cria os elementos (`h1`, `button`);
- O CSS estiliza o botão;
- O JavaScript faz o botão responder ao clique.

--- 

#### 🔵 História da Linguagem JavaScript
O JavaScript tem uma história interessante e rápida — ele nasceu para resolver um problema bem específico na web e acabou se tornando uma das linguagens **mais importantes do mundo**.

<div style="height: 1px"></div>

#### 🔹 Como tudo começou?
Em 1995, a empresa Netscape (criadora de um navegador da época) queria adicionar **interatividade** às páginas web. Eles contrataram Brendan Eich, que desenvolveu o JavaScript em apenas 10 dias.

A linguagem foi criada inicialmente com o nome Mocha, depois virou LiveScript e, por fim, foi rebatizada como JavaScript.

⚠️ Apesar do nome, JavaScript **não tem relação direta com Java**. Foi só uma jogada de marketing, pois Java era muito popular na época.

<div style="height: 1px"></div>

#### 🔹 Evolução rápida
JavaScript começou simples, mas cresceu muito. Com o tempo, a comunidade e as empresas passaram a exigir mais recursos, o que levou à criação do padrão ECMAScript (que veremos no próximo tópico).

Hoje, JavaScript é usado:

- No **navegador** (frontend);
- No **servidor**, com Node.js (backend);
- Em **apps mobile** (React Native);
- Em **jogos**, **IoT**, **machine learning**, e muito mais.

<div style="height: 1px"></div>

#### 🔹 Curiosidades

- JavaScript é **interpretado** (não precisa ser compilado);
- Roda em praticamente **todo navegador moderno**;
- Está no **topo** das linguagens mais populares há anos.

---

### 🔵 ECMAScript
JavaScript é padronizado por uma organização chamada **ECMA International**, e o nome oficial do padrão é **ECMAScript** (abreviado como ES). Esse padrão garante que o JavaScript funcione da mesma forma em diferentes navegadores e plataformas.

<div style="height: 1px"></div>

#### 🔹 Por que ECMAScript?
Logo após a criação do JavaScript, outras empresas (como a Microsoft) criaram suas próprias versões da linguagem. Para evitar confusão e padronizar o funcionamento da linguagem, foi criado um comitê chamado **TC39**, responsável por definir como o JavaScript deveria evoluir. A primeira versão oficial do padrão ECMAScript saiu em **1997**.

<div style="height: 1px"></div>

<div style="height: 1px"></div>

#### 🔹 Versões Importantes
As versões do ECMAScript são atualizadas anualmente. Aqui estão as mais marcantes:

|Versão	|Lançamento|	Novidades principais|
|-------|----------|------------------------|
|ES5	|2009|	`strict mode`, JSON, métodos de array modernos|
|ES6 (ES2015)	|2015|	`let`, `const`, arrow functions, classes, promises, template literals, módulos|
|ES7+	|2016 em diante|	`async/await`, operadores lógicos modernos, métodos novos em arrays, etc.|

A versão **ES6** foi uma revolução. Depois dela, as versões passaram a ser numeradas por **ano** (ES2016, ES2017, ...).

<div style="height: 1px"></div>

#### 🔹 Compatibilidade
Nem todos os navegadores antigos suportam os recursos mais novos. Por isso, ferramentas como **Babel** e **Webpack** foram criadas para “traduzir” código moderno para versões mais antigas.

---

### 🔵 Softwares Usados no Curso
Para programar em JavaScript com conforto e produtividade, vamos usar algumas ferramentas essenciais. Todas são **gratuitas**, multiplataforma (funcionam em Windows, macOS e Linux) e muito usadas na indústria.

<div style="height: 1px"></div>

#### 🔹 Google Chrome
O Chrome é um navegador moderno e rápido, ideal para testes e desenvolvimento web.

- Possui ferramentas para desenvolvedores (DevTools) embutidas.
- Ajuda a inspecionar elementos HTML, aplicar estilos CSS e testar códigos JavaScript diretamente.
- Recomendado, mas você pode usar Firefox, Edge ou outro navegador moderno também.

🔗 [Download do Chrome](https://www.google.com/intl/pt-BR/chrome/)

<div style="height: 1px"></div>

#### 🔹 Node.js
O Node.js é o que permite rodar código JavaScript **fora do navegador**, como se fosse uma linguagem de programação tradicional.

Com ele, você poderá:

- Executar arquivos .js diretamente no terminal;
- Criar programas e servidores;
- Utilizar o **npm** (Node Package Manager), que gerencia bibliotecas e ferramentas.

🔗 [Download do Node.js](https://nodejs.org/pt/download)

*Instale a versão LTS (Long Term Support), que é mais estável*.

<div style="height: 1px"></div>

#### 🔹 Visual Studio Code (VS Code)
O VS Code é um dos editores de código mais usados no mundo. É leve, rápido e tem suporte excelente para JavaScript.

Destaques:

- Extensões úteis (como ESLint, Prettier, Live Server…);
- Terminal integrado;
- Suporte a Git, debug, snippets e muito mais.

🔗 [Download do VS Code](https://code.visualstudio.com/download)

---

### 🔵 Estrutura Básica de um Programa em JavaScript
Um programa em JavaScript pode ser **simples e direto**, especialmente quando estamos começando. Ele é composto por instruções que dizem ao computador o que fazer. Essas instruções são escritas em arquivos com a extensão `.js`.

Você pode criar um arquivo chamado app.js e escrever nele comandos como:

```js
console.log("Olá, mundo!");
```

Essa linha imprime a mensagem no console (saída de texto).

Cada instrução é normalmente escrita em uma linha e termina com **ponto e vírgula (\;\)**, embora esse ponto e vírgula seja opcional em muitos casos:

Conjuntos de instruções são agrupados entre **chaves** `{}` e são chamados de blocos de código. Isso é importante, por exemplo, em estruturas de decisão, laços e funções.

---

### 🔵 Comentários em JavaScript
Comentários são trechos do código que **não são executados**. Eles servem para **explicar** o que o código faz, deixar anotações ou desativar trechos de código temporariamente.

Existem dois tipos principais de comentários em JavaScript:

<div style="height: 1px"></div>

#### 🔹 Comentário de uma linha
Usa `//` para comentar tudo que estiver após ele na mesma linha.

```js
// Isso é um comentário de uma linha
console.log("Olá, mundo!");
```

<div style="height: 1px"></div>

#### 🔹 Comentário de múltiplas linhas
Usa `/* */` para envolver várias linhas de comentário.

```js
/*
Este é um comentário
de múltiplas linhas
*/
console.log("Olá mundo");
```

<div style="height: 1px"></div>

#### 🔹 Boas práticas
- Comente **por quê** algo está sendo feito, não apenas o que está sendo feito.

* Evite excesso de comentários **óbvios**. Ex:

    ```js
    console.log("Olá, mundo!");  // Imprimindo "Olá, mundo" na tela ← desnecessário
    ```

- Use comentários para explicar **lógica complexa**, deixar TODOs (coisas a fazer), ou desativar código temporariamente durante testes.

---

### 🔵 Executando JavaScript no Node
O **Node.js** permite que você execute código JavaScript fora do navegador, no seu computador, de forma rápida e eficiente. Com ele, você pode rodar JavaScript no **back-end** (servidores, automações, etc.), além de usar a linha de comando para interagir com seus programas.

Com o Node.js instalado, você pode começar a rodar seus arquivos `.js` diretamente no terminal.

- Crie um arquivo JavaScript, por exemplo app.js:
    ```js
    console.log("Olá, Node!");
    ```

* Abra o terminal e execute o arquivo com o comando:
    ```js
    node app.js
    ```

- Você verá a saída:
    ```js
    Olá, Node!
    ```

---

### 🔵 DevTools
O **DevTools** (Ferramentas de Desenvolvedor) do navegador são um conjunto de ferramentas essenciais para o desenvolvimento, depuração e teste de aplicações web. Elas estão integradas diretamente nos navegadores, como o Google Chrome, e permitem que você inspecione e modifique o código das páginas em tempo real.

<div style="height: 1px"></div>

#### 🔹 Acessando o DevTools
No Google Chrome, para acessar as ferramentas de desenvolvedor, basta clicar com o botão direito na página e escolher **Inspecionar**, ou pressionar as teclas Ctrl + Shift + I (Windows) ou Cmd + Option + I (Mac).

<div style="height: 1px"></div>

#### 🔹 Principais Painéis do DevTools

**a) Console**
O painel Console permite que você veja as saídas do seu código JavaScript, erros e mensagens de log. Ele é útil para:

- Verificar saídas de console.log().

- Depurar erros de código.

- Interagir diretamente com o código JavaScript da página.

```js
console.log("Olá do Console!");
```


**b) Elements**
No painel Elements, você pode:

- Inspecionar e modificar o HTML e o CSS da página em tempo real.
- Alterar estilos de elementos para testar modificações visuais rapidamente.
- Ver a estrutura da árvore DOM da página.

**c) Network**
O painel Network mostra todas as requisições que a página faz para o servidor (carregamento de imagens, arquivos JS, API, etc.). Isso é muito útil para:

- Verificar se as requisições de API estão sendo feitas corretamente.
- Diagnosticar problemas de carregamento de recursos.

**d) Sources**
No painel Sources, você pode depurar o código JavaScript, adicionar breakpoints e fazer a execução passo a passo do seu código. Isso ajuda a identificar e corrigir problemas complexos no código.

**e) Application**
No painel Application, você pode visualizar e manipular o Local Storage, Session Storage, Cookies e outros dados armazenados no navegador, além de interagir com o Service Worker e as requisições de rede.

---

#### 🔵 GitHub
O GitHub é uma plataforma baseada em Git, que permite o **controle de versão** e o **compartilhamento de código** com outros desenvolvedores. É amplamente utilizado para projetos de software, colaborando em equipe e armazenando código-fonte de forma segura.

**Criar uma conta:**
- Acesse: https://github.com
- Clique em **Sign Up** e preencha os dados.

**Criar um repositório:**
- Após fazer login, clique em **New Repository**
- Dê o nome: JavaScript - OxeTech Lab
- Clique em **Create repository**

**Adicionar arquivos manualmente**
- Dentro do repositório, clique em **Add file** > **Upload files**
- Escolha o arquivo `.js` ou pasta do seu computador
- Clique em **Commit changes**

**Estrutura do Repositório:**
```scss
📁 curso-javascript
├── 📁 Aula 1
│   └── (Exercícios da Aula 1)
├── 📁 Aula 2
│   └── (Exercícios da Aula 2)
├── 📁 Aula 3
│   └── (Exercícios da Aula 3)
├── 📁 Aula 4
│   └── (Exercícios da Aula 4)
├── 📁 Aula 5
│   └── (Exercícios da Aula 5)
├── 📁 Aula 6
│   └── (Exercícios da Aula 6)
├── 📁 Aula 7
│   └── (Exercícios da Aula 7)
├── 📁 Aula 8
│   └── (Exercícios da Aula 8)
├── 📁 Aula 9
│   └── (Exercícios da Aula 9)
├── 📁 Aula 10
│   └── (Exercícios da Aula 10)
├── 📁 Aula 11
│   └── (Exercícios da Aula 11)
├── 📁 Aula 12
│   └── (Exercícios da Aula 12)
├── 📁 Aula 13
│   └── (Exercícios da Aula 13)
├── 📁 Aula 14
│   └── (Exercícios da Aula 14)
├── 📁 Projetos
│   └── (Projetos que serão desenvolvidos ao longo do curso)
├── 📁 Projeto Final
│   └── (Projeto final completo feito ao final do curso)
```

---