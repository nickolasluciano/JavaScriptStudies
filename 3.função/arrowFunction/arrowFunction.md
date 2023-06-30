A função arrow (ou função de seta) é uma sintaxe mais curta e concisa para criar funções em JavaScript. Ela foi introduzida na versão ES6 (ECMAScript 2015) e oferece uma maneira mais simples de escrever funções.

A sintaxe básica de uma função arrow é a seguinte:

```javascript
const nomeFuncao = (parametros) => {
  // corpo da função
};
```

A função arrow é definida usando a seta (=>) após a lista de parâmetros. O corpo da função está entre chaves ({}) e pode conter uma ou várias instruções.

A principal vantagem das funções arrow é que elas possuem um escopo léxico, o que significa que o valor de `this` dentro da função é determinado pelo contexto em que a função é definida, e não pelo contexto de execução. Isso evita a necessidade de usar `bind`, `call` ou `apply` para definir o valor de `this`.

Vamos ver alguns exemplos para ilustrar melhor:

Exemplo 1: Função sem parâmetros

```javascript
const saudacao = () => {
  console.log("Olá!");
};

saudacao(); // Saída: Olá!
```

Neste exemplo, a função arrow `saudacao` não possui parâmetros. Ela simplesmente imprime "Olá!" no console quando chamada.

Exemplo 2: Função com um parâmetro

```javascript
const dobro = (numero) => {
  return numero * 2;
};

console.log(dobro(5)); // Saída: 10
```

Neste exemplo, a função arrow `dobro` recebe um parâmetro `numero` e retorna o dobro desse número.

Exemplo 3: Função com múltiplos parâmetros e corpo curto

```javascript
const soma = (a, b) => a + b;

console.log(soma(2, 3)); // Saída: 5
```

Neste exemplo, a função arrow `soma` recebe dois parâmetros `a` e `b` e retorna a soma desses dois valores. Como o corpo da função é uma única expressão, não é necessário usar a palavra-chave `return`.

É importante mencionar que as funções arrow não possuem seu próprio objeto `arguments`. Portanto, se você precisar acessar os argumentos passados para a função, é recomendado usar a sintaxe de rest parameters (`...`) ou usar a função `arguments` em uma função regular.

Em resumo, as funções arrow são uma forma mais concisa de escrever funções em JavaScript, oferecendo um escopo léxico e evitando a necessidade de definir o valor de `this` explicitamente. Elas são amplamente utilizadas na programação moderna em JavaScript devido à sua simplicidade e legibilidade.