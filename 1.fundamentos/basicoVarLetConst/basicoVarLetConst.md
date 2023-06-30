Em JavaScript, `var`, `let` e `const` são palavras-chave usadas para declarar variáveis. Cada uma delas possui características e escopos diferentes. Vamos explorar cada uma delas:

1. `var`:

    O `var` foi a forma original de declarar variáveis em JavaScript antes da introdução do `let` e `const`. Ele possui escopo de função ou escopo global.

Exemplo:

```javascript

function exemplo() {
  var x = 10; // Escopo da função
  if (true) {
    var y = 20; // Escopo da função
    console.log(x); // Resultado: 10
  }
  console.log(y); // Resultado: 20
}
exemplo();
console.log(x); // Erro: x não está definido
console.log(y); // Erro: y não está definido
```

No exemplo acima, a variável x é acessível dentro da função exemplo, mas não é acessível fora dela. Já a variável y é acessível dentro do bloco if e também dentro da função.

2. `let`:

    O `let` foi introduzido no ECMAScript 6 (ES6) e possui escopo de bloco. Isso significa que a variável declarada com `let` é acessível apenas dentro do bloco onde foi declarada.

Exemplo:

```javascript

function exemplo() {
  let x = 10; // Escopo da função
  if (true) {
    let y = 20; // Escopo do bloco if
    console.log(x); // Resultado: 10
  }
  console.log(y); // Erro: y não está definido
}
exemplo();
console.log(x); // Erro: x não está definido
```

No exemplo acima, a variável `x` é acessível dentro da função `exemplo`, mas não é acessível fora dela. Já a variável `y` é acessível apenas dentro do bloco `if`.

Uma característica importante do `let` é que ele não permite a redeclaração da mesma variável dentro do mesmo escopo.

```javascript

let x = 10;
let x = 20; // Erro: Identificador 'x' já foi declarado
```
3. `const`:
    
    O `const` também foi introduzido no ES6 e é usado para declarar variáveis com valores constantes, ou seja, que não podem ser alterados depois de atribuídos. Assim como o `let`, o `const` também possui escopo de bloco.

Exemplo:

```javascript

function exemplo() {
  const x = 10; // Escopo da função
  if (true) {
    const y = 20; // Escopo do bloco if
    console.log(x); // Resultado: 10
  }
  console.log(y); // Erro: y não está definido
}
exemplo();
console.log(x); // Erro: x não está definido
```

No exemplo acima, a variável `x` é acessível dentro da função `exemplo`, mas não é acessível fora dela. Assim como o `let`, a variável `y` é acessível apenas dentro do bloco `if`.

Uma característica importante do `const` é que ele não permite a reatribuição de valor para a mesma variável.

```javascript

const x = 10;
x = 20; // Erro: Atribuição para variável constante
```

No entanto, é importante mencionar que o `const` não torna o valor imutável. Se você atribuir um objeto ou array a uma variável `const`, ainda poderá modificar as propriedades desse objeto ou elementos desse array.

```javascript

const obj = { nome: "João" };
obj.nome = "Maria"; // Permitido
console.log(obj.nome); // Resultado: "Maria"

const arr = [1, 2, 3];
arr.push(4); // Permitido
console.log(arr); // Resultado: [1, 2, 3, 4]
```

Em resumo, `var` possui escopo de função ou escopo global, `let` possui escopo de bloco e não permite redeclaração no mesmo escopo, e `const` possui escopo de bloco e não permite reatribuição de valor.

Recomenda-se o uso de `let` e `const` em vez de `var`, pois eles oferecem um escopo mais restrito e ajudam a evitar problemas comuns relacionados a escopo e redeclaração.

Espero que isso tenha sido útil para você entender a diferença entre `var`, `let` e `const` em JavaScript! Se tiver mais dúvidas, não hesite em perguntar.