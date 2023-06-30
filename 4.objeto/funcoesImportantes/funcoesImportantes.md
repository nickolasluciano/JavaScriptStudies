1. Object.keys():
O método **`Object.keys()`** retorna um array com as chaves de um objeto. Ele aceita um objeto como argumento e retorna um array contendo as chaves desse objeto. A ordem das chaves no array será a mesma em que foram definidas no objeto.

Exemplo:

```javascript
var objeto = { a: 1, b: 2, c: 3 };
var chaves = Object.keys(objeto);
console.log(chaves); // Output: ["a", "b", "c"]
```

2. Object.values():
O método **`Object.values()`** retorna um array com os valores das propriedades de um objeto. Ele aceita um objeto como argumento e retorna um array contendo os valores das propriedades desse objeto. A ordem dos valores no array será a mesma ordem das chaves retornadas pelo método **`Object.keys()`**.

Exemplo:

```javascript
var objeto = { a: 1, b: 2, c: 3 };
var valores = Object.values(objeto);
console.log(valores); // Output: [1, 2, 3]
```

3. Object.entries():
O método **`Object.entries()`** retorna um array de arrays contendo pares chave-valor de um objeto. Ele aceita um objeto como argumento e retorna um array onde cada elemento é um array com a chave e o valor correspondente do objeto.

Exemplo:

```javascript
var objeto = { a: 1, b: 2, c: 3 };
var entradas = Object.entries(objeto);
console.log(entradas); // Output: [["a", 1], ["b", 2], ["c", 3]]
```

4. .forEach():
O método **`.forEach()`** é usado para iterar sobre os elementos de um array. Ele aceita uma função de callback como argumento e chama essa função para cada elemento do array. A função de callback recebe três argumentos: o valor do elemento, o índice do elemento e o array sendo percorrido.

Exemplo:

```javascript
var array = [1, 2, 3];
array.forEach(function(elemento, indice) {
  console.log("Elemento:", elemento, "Índice:", indice);
});
// Output:
// Elemento: 1 Índice: 0
// Elemento: 2 Índice: 1
// Elemento: 3 Índice: 2
```

5. Object.defineProperty():
O método **`Object.defineProperty()`** permite definir uma nova propriedade em um objeto ou modificar uma propriedade existente. Ele aceita o objeto alvo, o nome da propriedade e um objeto de configuração como argumentos.

Exemplo:

```javascript
var objeto = {};
Object.defineProperty(objeto, "nome", {
  value: "João",
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(objeto.nome); // Output: "João"
```

Nesse exemplo, definimos uma nova propriedade chamada "nome" no objeto **`objeto`** com o valor "João". As opções **`writable`**, **`enumerable`** e **`configurable`** são configuradas como **`true`** para permitir a modificação, enumeração e remoção da propriedade, respectivamente.

6. Object.assign():
O método **`Object.assign()`** é usado para copiar as propriedades de um ou mais objetos para um objeto de destino. Ele aceita um objeto de destino e um ou mais objetos de origem como argumentos. Ele retorna o objeto de destino com as propriedades mescladas.

Exemplo:

```javascript
var objetoDestino = {};
var objetoOrigem = { a: 1, b: 2 };
Object.assign(objetoDestino, objetoOrigem);
console.log(objetoDestino); // Output: { a: 1, b: 2 }
```

Nesse exemplo, copiamos as propriedades do objeto **`objetoOrigem`** para o objeto **`objetoDestino`**.

7. Object.freeze():
O método **`Object.freeze()`** congela um objeto, tornando-o imutável. Após congelado, não é possível adicionar, modificar ou remover propriedades do objeto. Qualquer tentativa de fazer isso será ignorada ou resultará em um erro no modo estrito.

Exemplo:

```javascript
var objeto = { a: 1, b: 2 };
Object.freeze(objeto);
objeto.c = 3; // não terá efeito
console.log(objeto); // Output: { a: 1, b: 2 }
```

Nesse exemplo, congelamos o objeto **`objeto`** usando **`Object.freeze()`**, o que impede que novas propriedades sejam adicionadas.

Esses são alguns métodos e propriedades úteis para trabalhar com objetos em JavaScript. Cada um deles tem seu propósito e pode ser utilizado de acordo com a necessidade do seu código.