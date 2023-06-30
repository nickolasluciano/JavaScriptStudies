IIFE (Immediately Invoked Function Expression)

Uma IIFE é uma função que é executada imediatamente após sua definição. Ela é envolvida por parênteses e, em seguida, é chamada com parênteses adicionais. Essa técnica é usada para criar um escopo isolado, evitando conflitos com outras variáveis no escopo global e ajudando a proteger o código.

Aqui está um exemplo de uma IIFE em JavaScript:

```jsx
(function() {
  var mensagem = "Olá, mundo!";
  console.log(mensagem);
})();
```

Nesse exemplo, temos uma função anônima envolvida por parênteses externos e chamada com parênteses adicionais **`()`** ao final. Isso faz com que a função seja executada imediatamente.

Dentro da IIFE, declaramos uma variável **`mensagem`** e a inicializamos com o valor "Olá, mundo!". Em seguida, usamos o **`console.log`** para exibir a mensagem no console.

A principal vantagem de usar uma IIFE é que ela cria um escopo isolado para o código dentro da função. Isso significa que as variáveis e funções declaradas dentro da IIFE não poluem o escopo global. Qualquer variável ou função definida dentro da IIFE é acessível apenas dentro dela, protegendo o código de interferências externas.

Aqui está outro exemplo que demonstra como uma IIFE pode ajudar a proteger as variáveis locais:

```javascript
(function() {
  var contador = 0;

  function incrementar() {
    contador++;
    console.log("Contador:", contador);
  }

  function decrementar() {
    contador--;
    console.log("Contador:", contador);
  }

  incrementar();
  incrementar();
  decrementar();
})();
```

Nesse exemplo, a IIFE envolve as declarações das funções **`incrementar`** e **`decrementar`**, bem como a lógica de chamada das funções.

Dentro da IIFE, temos uma variável **`contador`** que é inicializada com o valor 0. Em seguida, temos as funções **`incrementar`** e **`decrementar`**, que incrementam e decrementam o contador, respectivamente, e exibem o valor atual no console.

Ao executar a IIFE, podemos chamar as funções **`incrementar`** e **`decrementar`** várias vezes sem afetar o escopo global. O contador é mantido dentro do escopo da IIFE e não pode ser acessado ou modificado fora dela.

Em resumo, uma IIFE é uma função que é executada imediatamente após sua definição. Ela é envolvida por parênteses e chamada com parênteses adicionais. A IIFE cria um escopo isolado para o código dentro dela, protegendo as variáveis e funções de interferências externas. Essa técnica é útil para evitar conflitos de variáveis globais e manter um código mais seguro e organizado.