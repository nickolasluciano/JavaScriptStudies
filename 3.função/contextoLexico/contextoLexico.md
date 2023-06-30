Contexto léxico em JavaScript se refere ao ambiente no qual uma função é declarada e no qual ela tem acesso às variáveis. É o escopo em que a função foi definida, incluindo as variáveis, objetos e funções disponíveis dentro desse escopo.

Para entender melhor, vamos analisar alguns exemplos:

Exemplo 1:

```jsx
javascriptCopy code
function saudacao() {
  const mensagem = 'Olá, mundo!';
  console.log(mensagem);
}

saudacao(); // Saída: "Olá, mundo!"

```

Neste exemplo, a função **`saudacao`** é definida e dentro dela é declarada a variável **`mensagem`**. A função tem acesso ao contexto léxico onde foi declarada, o que significa que pode acessar a variável **`mensagem`**. Ao executar a função, a mensagem "Olá, mundo!" é exibida no console.

Exemplo 2:

```jsx
javascriptCopy code
function externa() {
  const mensagem = 'Hello';

  function interna() {
    console.log(mensagem);
  }

  interna();
}

externa(); // Saída: "Hello"

```

Neste exemplo, temos uma função chamada **`externa`** que declara a variável **`mensagem`** e uma função interna chamada **`interna`**. A função **`interna`** tem acesso ao contexto léxico da função **`externa`**, permitindo que ela acesse a variável **`mensagem`**. Ao chamar a função **`externa`**, a função **`interna`** é executada e exibe a mensagem "Hello" no console.

O contexto léxico é importante porque afeta a maneira como as variáveis são acessadas dentro de uma função. Se uma variável não estiver definida no contexto léxico atual, JavaScript procurará em escopos externos até encontrar a variável desejada.

Exemplo 3:

```jsx
javascriptCopy code
function externa() {
  const mensagem = 'Olá';

  function interna() {
    const complemento = 'mundo!';
    console.log(mensagem + ' ' + complemento);
  }

  interna();
}

externa(); // Saída: "Olá mundo!"

```

Neste exemplo, a função **`interna`** tem acesso tanto à variável **`mensagem`** declarada no contexto léxico da função **`externa`**, quanto à variável **`complemento`** declarada dentro da função **`interna`** em si. Assim, ao chamar a função **`externa`**, a mensagem "Olá mundo!" é exibida no console.

O contexto léxico também é afetado por closures, que permitem que funções internas mantenham acesso ao escopo de suas funções externas, mesmo após a função externa ter sido executada. Isso é possível graças à captura do contexto léxico da função externa.

Em resumo, o contexto léxico em JavaScript se refere ao ambiente em que uma função é definida e onde ela tem acesso às variáveis. Isso permite o uso de variáveis e funções dentro de uma função com base no seu escopo de declaração. Compreender o contexto léxico é fundamental para entender como as variáveis são acessadas e como o escopo é gerenciado em JavaScript.