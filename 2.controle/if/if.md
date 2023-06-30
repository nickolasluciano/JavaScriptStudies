Essas estruturas são usadas para tomar decisões condicionais em JavaScript, permitindo executar diferentes blocos de código com base em determinadas condições.

1. Estrutura **`if`**:

A estrutura **`if`** é a forma mais básica de uma estrutura condicional em JavaScript. Ela permite executar um bloco de código se uma condição for verdadeira.

```javascript
if (condicao) {
  // bloco de código a ser executado se a condição for verdadeira
}
```

Exemplo:

```javascript
var idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

No exemplo acima, o bloco de código dentro do **`if`** será executado apenas se a **`idade`** for maior ou igual a 18. Caso contrário, ele será ignorado.

2. Estrutura **`if...else`**:

A estrutura **`if...else`** permite executar um bloco de código se a condição for verdadeira e outro bloco de código se a condição for falsa.

```javascript
if (condicao) {
  // bloco de código a ser executado se a condição for verdadeira
} else {
  // bloco de código a ser executado se a condição for falsa
}
```

Exemplo:

```javascript
var idade = 17;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

No exemplo acima, o bloco de código dentro do **`if`** será executado se a **`idade`** for maior ou igual a 18. Caso contrário, o bloco de código dentro do **`else`** será executado.

3. Estrutura **`else if`**:

A estrutura **`else if`** permite testar múltiplas condições encadeadas. Ela é usada quando você precisa verificar várias possibilidades.

```javascript
if (condicao1) {
  // bloco de código a ser executado se a condição1 for verdadeira
} else if (condicao2) {
  // bloco de código a ser executado se a condição2 for verdadeira
} else {
  // bloco de código a ser executado se todas as condições anteriores forem falsas
}
```

Exemplo:

```javascript
var diaDaSemana = "sábado";

if (diaDaSemana === "segunda") {
  console.log("Hoje é segunda-feira.");
} else if (diaDaSemana === "terça") {
  console.log("Hoje é terça-feira.");
} else if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
  console.log("Hoje é fim de semana.");
} else {
  console.log("Hoje é um dia da semana.");
}
```

No exemplo acima, estamos verificando diferentes possibilidades para o **`diaDaSemana`**. Se for "segunda", será exibida uma mensagem específica. Se for "terça", será exibida outra mensagem. Se for "sábado" ou "domingo", será exibida a mensagem de fim de semana. Caso contrário, será exibida a mensagem padrão.

É importante notar que as condições são verificadas na ordem em que são apresentadas, e apenas o primeiro bloco cuja condição for verdadeira será executado. Os blocos de código **`else if`** e **`else`** são opcionais e você pode ter quantos **`else if`** forem necessários.

Essas são as estruturas básicas de decisão condicional em JavaScript. Elas permitem que você execute diferentes ações com base em diferentes condições. Lembre-se de que a indentação correta é importante para tornar o código mais legível.