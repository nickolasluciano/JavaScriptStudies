As estruturas de controle são usadas em JavaScript para controlar o fluxo de execução do código. Elas permitem tomar decisões e repetir blocos de código com base em certas condições. As principais estruturas de controle em JavaScript são: estruturas condicionais (if/else, switch) e estruturas de repetição (for, while, do...while). Vamos explorar cada uma delas:

1. Estruturas condicionais:
- if/else:
A estrutura if/else permite executar um bloco de código se uma condição for verdadeira e outro bloco de código se a condição for falsa.

Exemplo:

```javascript
var idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

- switch:
A estrutura switch permite executar diferentes blocos de código com base em diferentes valores de uma expressão.

Exemplo:

```javascript
var diaDaSemana = 2;
var mensagem;

switch (diaDaSemana) {
  case 1:
    mensagem = "Hoje é segunda-feira.";
    break;
  case 2:
    mensagem = "Hoje é terça-feira.";
    break;
  case 3:
    mensagem = "Hoje é quarta-feira.";
    break;
  // e assim por diante
  default:
    mensagem = "Dia inválido.";
}

console.log(mensagem);
```

2. Estruturas de repetição:
- for:
A estrutura for permite repetir um bloco de código um determinado número de vezes.

Exemplo:

```javascript
for (var i = 0; i < 5; i++) {
  console.log("O valor de i é: " + i);
}
```

- while:
A estrutura while permite repetir um bloco de código enquanto uma condição for verdadeira.

Exemplo:

```javascript
var i = 0;

while (i < 5) {
  console.log("O valor de i é: " + i);
  i++;
}
```

- do...while:
A estrutura do...while é semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa.

Exemplo:

```javascript
var i = 0;

do {
  console.log("O valor de i é: " + i);
  i++;
} while (i < 5);
```

Essas são apenas algumas das estruturas de controle disponíveis em JavaScript. Elas são fundamentais para controlar o fluxo do programa e torná-lo mais dinâmico e interativo.

É importante entender a lógica por trás de cada estrutura de controle e escolher a estrutura correta de acordo com o problema que está sendo resolvido.