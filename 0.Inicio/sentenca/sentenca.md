Em JavaScript, uma sentença de código, também conhecida como instrução, é uma unidade básica de código que realiza uma ação específica. As sentenças de código são usadas para executar tarefas e controlar o fluxo do programa.

Vamos ver alguns exemplos de sentenças de código em JavaScript:

Atribuição de variável:
```javascript

let nome = "João";
```
Nesse exemplo, a sentença de código realiza a atribuição do valor "João" à variável `nome`. Isso significa que o valor "João" é armazenado na variável `nome`.

Expressões aritméticas:
```javascript
let x = 5 + 3;
```
Nesse exemplo, a sentença de código realiza uma expressão aritmética e atribui o resultado à variável `x`. A expressão `5 + 3` é avaliada e o valor resultante, que é 8, é armazenado em `x`.

Chamada de função:
```javascript
console.log("Olá, mundo!");
```
Nesse exemplo, a sentença de código chama a função `console.log()` com o argumento "Olá, mundo!". A função `console.log()` exibe uma mensagem no console do navegador ou no console de um ambiente de execução do JavaScript.

Estruturas condicionais:
```javascript

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

```

Nesse exemplo, a sentença de código usa uma estrutura condicional `if-else`. Dependendo do valor da variável `idade`, uma das duas instruções dentro dos blocos `if` ou `else` será executada. A sentença de código `console.log("Você é maior de idade.");` será executada se a condição for verdadeira, caso contrário, a sentença de código `console.log("Você é menor de idade.");` será executada.

Esses são apenas alguns exemplos de sentenças de código em JavaScript. Cada sentença realiza uma ação específica e é fundamental para controlar o fluxo do programa.

É importante notar que as sentenças de código geralmente são separadas por ponto e vírgula `;`, mas em alguns casos, o JavaScript é capaz de inferir automaticamente o ponto e vírgula e não é necessário adicioná-lo.

Por exemplo:

```javascript
let x = 5;
console.log(x);
```
Nesse caso, as sentenças de código estão separadas por um ponto e vírgula. No entanto, o JavaScript é capaz de inferir automaticamente o ponto e vírgula após a declaração da variável `x`, então o código também seria válido se escrito assim:

```javascript
let x = 5
console.log(x)
```
No entanto, é recomendado adicionar o ponto e vírgula para evitar possíveis problemas de interpretação do código.