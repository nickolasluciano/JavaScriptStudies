Existem três principais formas de declarar funções em JavaScript: a declaração de função, a expressão de função e a arrow function. Vamos analisar cada uma delas:

1. Declaração de Função:
A declaração de função é a forma mais comum de definir uma função em JavaScript. Ela segue a seguinte sintaxe:

```jsx
function nomeDaFuncao(parametros) {
  // corpo da função
  // pode incluir declaração de variáveis, lógica, retornos, etc.
}
```

Exemplo:

```jsx
function somar(a, b) {
  return a + b;
}

var resultado = somar(2, 3);
console.log(resultado); // Output: 5
```

Na declaração de função, o nome da função é seguido pelos parâmetros entre parênteses. Dentro do corpo da função, você pode incluir a lógica necessária e retornar um valor, se necessário.

2. Expressão de Função:
A expressão de função é uma forma alternativa de definir uma função. Nesse caso, a função é atribuída a uma variável ou a uma propriedade de um objeto. A sintaxe é a seguinte:

```jsx
var nomeDaFuncao = function(parametros) {
  // corpo da função
  // pode incluir declaração de variáveis, lógica, retornos, etc.
};
```

Exemplo:

```jsx
var multiplicar = function(a, b) {
  return a * b;
};

var resultado = multiplicar(2, 3);
console.log(resultado); // Output: 6
```

Na expressão de função, a função é atribuída a uma variável chamada **`nomeDaFuncao`**. Isso permite que você use a variável para chamar a função.

3. Arrow Function:
A arrow function é uma nova forma introduzida no ES6 (ECMAScript 2015) para declarar funções de forma mais concisa. Ela tem uma sintaxe especial usando a seta **`=>`**. A sintaxe básica é a seguinte:

```jsx
var nomeDaFuncao = (parametros) => {
  // corpo da função
  // pode incluir declaração de variáveis, lógica, retornos, etc.
};
```

Exemplo:

```jsx
var dividir = (a, b) => {
  return a / b;
};

var resultado = dividir(10, 2);
console.log(resultado); // Output: 5
```

As arrow functions são especialmente úteis quando você deseja manter o valor de **`this`** vinculado ao contexto atual. Elas também oferecem uma sintaxe mais enxuta para funções simples.

Esses são os principais tipos de declaração de funções em JavaScript. Cada um tem suas próprias características e casos de uso. É importante entender a diferença entre eles para escolher o mais adequado em cada situação.