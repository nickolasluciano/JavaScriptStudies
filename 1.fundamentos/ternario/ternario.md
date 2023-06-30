O operador ternário em JavaScript é uma forma abreviada de escrever uma estrutura de decisão condicional simples. Ele permite avaliar uma expressão e retornar um valor com base em uma condição. A sintaxe geral do operador ternário é a seguinte:

```javascript
condicao ? valorSeVerdadeiro : valorSeFalso;
```

A **`condicao`** é uma expressão que será avaliada. Se a **`condicao`** for verdadeira, o **`valorSeVerdadeiro`** será retornado, caso contrário, o **`valorSeFalso`** será retornado.

Vamos ver um exemplo para entender melhor como funciona:

```javascript
var idade = 18;
var status = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(status); // Resultado: "Adulto"
```

No exemplo acima, estamos atribuindo o valor da expressão **`(idade >= 18) ? "Adulto" : "Menor de idade"`** à variável **`status`**. A expressão verifica se a **`idade`** é maior ou igual a 18. Se for verdadeiro, o valor retornado será "Adulto", caso contrário, será "Menor de idade". Como a **`idade`** é igual a 18, o valor retornado será "Adulto".

O operador ternário é útil quando você precisa fazer uma decisão simples com base em uma condição. Ele pode ser usado em declarações de variáveis, atribuições, retornos de funções e outras situações em que uma escolha precisa ser feita.

É importante lembrar que o operador ternário pode ser encadeado, permitindo tomar decisões mais complexas. Por exemplo:

```javascript
var idade = 18;
var nacionalidade = "Brasileiro";
var status = (idade >= 18 && nacionalidade === "Brasileiro") ? "Pode votar" : "Não pode votar";
console.log(status); // Resultado: "Pode votar"
```

No exemplo acima, estamos verificando tanto a **`idade`** quanto a **`nacionalidade`**. Se ambas as condições forem verdadeiras, o valor retornado será "Pode votar", caso contrário, será "Não pode votar". Como a **`idade`** é igual a 18 e a **`nacionalidade`** é "Brasileiro", o valor retornado será "Pode votar".

O uso adequado do operador ternário pode simplificar o código e torná-lo mais legível, especialmente em situações em que a decisão é simples e direta.