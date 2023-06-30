A estrutura **`switch`** é uma forma de estrutura condicional em JavaScript que permite verificar múltiplas condições e executar diferentes blocos de código com base no valor de uma expressão. Ela é útil quando você tem uma expressão que pode ter vários valores possíveis e deseja executar diferentes ações com base nesses valores.

A sintaxe básica do **`switch`** é a seguinte:

```javascript
switch (expressao) {
  case valor1:
    // bloco de código a ser executado se a expressao for igual a valor1
    break;
  case valor2:
    // bloco de código a ser executado se a expressao for igual a valor2
    break;
  case valor3:
    // bloco de código a ser executado se a expressao for igual a valor3
    break;
  default:
    // bloco de código a ser executado se a expressao não corresponder a nenhum dos valores anteriores
}
```

Vamos ver um exemplo para ilustrar o uso do **`switch`**:

```javascript
var diaDaSemana = 2;
var nomeDia;

switch (diaDaSemana) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;
  default:
    nomeDia = "Dia inválido";
}

console.log("Hoje é " + nomeDia);
```

No exemplo acima, temos uma variável **`diaDaSemana`** que contém um número inteiro representando o dia da semana (1 para domingo, 2 para segunda-feira, e assim por diante). Usamos a estrutura **`switch`** para verificar o valor de **`diaDaSemana`** e atribuir o nome correspondente a **`nomeDia`**.

Neste caso, o valor de **`diaDaSemana`** é 2, então o bloco de código correspondente ao **`case 2`** é executado e atribui o valor "Segunda-feira" a **`nomeDia`**.

Se **`diaDaSemana`** tivesse um valor diferente, o bloco de código correspondente ao valor correspondente seria executado, ou o bloco **`default`** seria executado se a expressão não correspondesse a nenhum dos valores anteriores.

É importante mencionar que, após a execução de um bloco de código em um **`case`**, o **`break`** é usado para sair do **`switch`**. Isso evita que a execução continue nos outros blocos. Sem o **`break`**, o código continuaria a executar nos casos subsequentes, mesmo que as condições não sejam correspondentes.