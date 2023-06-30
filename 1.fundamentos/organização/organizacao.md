Organizar o código de forma adequada é fundamental para manter um código legível, modular e de fácil manutenção. Existem algumas práticas comuns para organizar um código em JavaScript. Vamos explorar cada uma delas:

1. Comentários:

    Os comentários são trechos de texto que não são executados pelo interpretador JavaScript. Eles servem para adicionar explicações e informações relevantes sobre o código, facilitando o entendimento para você e outros programadores.

Exemplo:

```javascript

// Este é um comentário de linha

/*
  Este é um comentário de bloco
  que pode ocupar várias linhas
*/

// Exemplo de comentário explicando um trecho de código
let resultado = soma(2, 3); // Chama a função soma com 2 e 3 como argumentos
```

2. Estrutura básica do código:
    
    Em um arquivo JavaScript, você geralmente encontrará uma estrutura básica que inclui a declaração de variáveis, a definição de funções e o código de execução principal.

Exemplo:

```javascript

// Declaração de variáveis
let nome = "João";
let idade = 25;

// Definição de função
function saudacao() {
  console.log("Olá, " + nome + "!");
}

// Código de execução principal
saudacao();
```

3. Organização de funções:
    
    As funções desempenham um papel importante na organização do código. É recomendado agrupar funções relacionadas em uma mesma seção do código para facilitar a leitura e manutenção.

Exemplo:

```javascript

function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Chamadas das funções
let areaRetangulo = calcularAreaRetangulo(4, 5);
let areaTriangulo = calcularAreaTriangulo(3, 6);
```

4. Modularização:
    
    Quando o código fica muito extenso, é recomendado dividir o código em módulos para facilitar a organização. Cada módulo pode conter funções, variáveis e lógica relacionada a uma determinada tarefa.

Exemplo:
Módulo "Calculadora.js":

```javascript

export function soma(a, b) {
  return a + b;
}

export function subtracao(a, b) {
  return a - b;
}
```

Arquivo principal "main.js":

```javascript

import { soma, subtracao } from './Calculadora.js';

let resultadoSoma = soma(2, 3);
let resultadoSubtracao = subtracao(5, 2);

console.log(resultadoSoma); // Resultado: 5
console.log(resultadoSubtracao); // Resultado: 3
```

Essas são algumas das práticas básicas para organizar um código em JavaScript. É importante lembrar que a organização pode variar dependendo do tamanho e complexidade do projeto. Em projetos maiores, é comum utilizar padrões de projeto e estruturas mais avançadas, como o uso de módulos, classes e frameworks.

Lembre-se também de manter um estilo de código consistente, seguindo as convenções de nomenclatura e formatação adotadas pela comunidade JavaScript, como o uso de camelCase para nomes de variáveis e funções, indentação adequada, entre outros.