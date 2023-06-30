Comentários em JavaScript são trechos de texto que são ignorados pelo interpretador da linguagem. Eles são usados para adicionar notas explicativas ou instruções para outros desenvolvedores ou para si mesmo, sem afetar a execução do código.

Existem duas formas de criar comentários em JavaScript:

Comentários de linha única: Esses comentários começam com duas barras `//` e abrangem apenas a linha em que são escritos. Tudo que estiver após as duas barras será tratado como um comentário e não será interpretado como código.
Exemplo:

```javascript
// Isso é um comentário de linha única

console.log("Olá, mundo!"); // Isso também é um comentário de linha única

// console.log("Isso é um código comentado e não será executado.");
```
No exemplo acima, temos três linhas com comentários de linha única. A primeira linha é um comentário que não tem nenhum efeito no código. A segunda linha mostra que é possível adicionar um comentário após uma instrução válida, sem afetar a execução do código. Já a terceira linha está comentada, ou seja, o código `console.log("Isso é um código comentado e não será executado.");` não será executado.

Comentários de várias linhas: Esses comentários começam com `/*` e terminam com `*/.` Eles podem abranger várias linhas de código e são úteis para comentários mais longos.
Exemplo:

```javascript

/*
  Isso é um comentário de várias linhas.
  Ele pode abranger várias linhas de código.
  Aqui podemos adicionar explicações mais detalhadas.
*/

console.log("Olá, mundo!");

/*
console.log("Este código também está comentado e não será executado.");
*/
```

Nesse exemplo, temos um comentário de várias linhas que abrange três linhas de código. O comentário é delimitado por `/*` e `*/`. Tudo que está dentro dessas marcas é considerado um comentário e não será interpretado pelo interpretador JavaScript. O código `console.log("Este código também está comentado e não será executado.");` está comentado e não será executado.

Os comentários são úteis para documentar o código, fornecer explicações, desativar temporariamente partes do código durante o desenvolvimento ou para deixar notas para futuras referências.

É importante ressaltar que os comentários não afetam o funcionamento do código, eles são apenas informações para os desenvolvedores. Durante a execução do programa, os comentários são ignorados.