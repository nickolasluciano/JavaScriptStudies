Em JavaScript, os parâmetros são valores que você pode passar para uma função quando você a chama. Eles permitem que você forneça dados específicos para a função manipular ou processar. Os parâmetros são definidos na declaração da função e atuam como variáveis locais dentro do escopo da função.

Existem dois tipos de parâmetros em JavaScript: parâmetros obrigatórios e parâmetros opcionais.

1. Parâmetros obrigatórios:
Os parâmetros obrigatórios são aqueles que devem ser fornecidos ao chamar a função. Eles são definidos entre os parênteses na declaração da função e podem ter qualquer nome válido.
    
Exemplo de uma função com parâmetro obrigatório:
    
```javascript
function saudacao(nome) {
console.log("Olá, " + nome + "!");
}

saudacao("João"); // chama a função com o parâmetro "João"
saudacao("Maria"); // chama a função com o parâmetro "Maria"
```
    
No exemplo acima, a função **`saudacao`** possui um parâmetro chamado **`nome`**. Ao chamar a função, é necessário fornecer um valor para o parâmetro. A função então usa esse valor para exibir uma saudação personalizada no console.

2. Parâmetros opcionais:
Os parâmetros opcionais são aqueles que podem ou não ser fornecidos ao chamar a função. Eles têm um valor padrão predefinido e são indicados usando o operador de atribuição (**`=`**) na declaração da função.
    
Exemplo de uma função com parâmetro opcional:

```javascript
function calcularArea(base, altura = 1) {
    var area = base * altura;
    console.log("A área é: " + area);
}

calcularArea(5); // chama a função com apenas o parâmetro "base"
calcularArea(3, 4); // chama a função com os parâmetros "base" e "altura"
```

No exemplo acima, a função **`calcularArea`** possui dois parâmetros: **`base`** e **`altura`**. O parâmetro **`altura`** é opcional e tem um valor padrão de 1 atribuído a ele. Portanto, se você chamar a função apenas com o parâmetro **`base`**, a altura será considerada como 1.

É importante notar que os parâmetros opcionais devem ser declarados após os parâmetros obrigatórios.

Você também pode usar o operador de espalhamento (**`...`**) para criar funções que aceitem um número variável de argumentos.

Exemplo de uma função com parâmetros usando o operador de espalhamento:

```javascript
function somar(...numeros) {
  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  console.log("A soma é: " + resultado);
}

somar(1, 2, 3); // chama a função com múltiplos parâmetros
somar(4, 5, 6, 7, 8); // chama a função com um número diferente de parâmetros
```

No exemplo acima, a função **`somar`** aceita um número variável de parâmetros. Os parâmetros são agrupados em um array chamado **`numeros`**, usando o operador de espalhamento. Em seguida, a função percorre o array e soma todos os valores.

Lembre-se de que os parâmetros são variáveis locais dentro do escopo da função e não podem ser acessados fora dela.