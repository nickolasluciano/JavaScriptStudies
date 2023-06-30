A notação literal é uma forma de criar objetos e arrays de maneira mais concisa e legível, utilizando uma sintaxe simplificada. No ES6, foram introduzidas algumas melhorias na notação literal de objetos e arrays.

1. Notação Literal de Objetos:
    - Antes do ES6:
        
        ```javascript
        var nome = "João";
        var idade = 30;
        var pessoa = {
          nome: nome,
          idade: idade
        };
        ```
        
    - Com a notação literal do ES6:
        
        ```javascript
        const nome = "João";
        const idade = 30;
        const pessoa = {
          nome,
          idade
        };
        ```
        
    
    Na notação literal de objetos, quando a propriedade do objeto tem o mesmo nome da variável que contém seu valor, podemos omitir a repetição e utilizar apenas o nome da variável. Isso torna a sintaxe mais simples e legível.
    
2. Notação Literal de Arrays:
    - Antes do ES6:
        
        ```javascript
        var numeros = [1, 2, 3, 4];
        ```
        
    - Com a notação literal do ES6:
        
        ```javascript
        const numeros = [1, 2, 3, 4];
        ```
        
    
    Na notação literal de arrays, podemos definir os elementos diretamente dentro dos colchetes, separados por vírgula.
    

Essas melhorias na notação literal tornam o código mais conciso e legível, evitando repetições desnecessárias e facilitando a criação de objetos e arrays.

É importante ressaltar que a notação literal do ES6 é amplamente suportada pelos navegadores modernos, mas nem todos os recursos do ES6 são suportados em navegadores mais antigos. Se você estiver trabalhando em um ambiente em que precisa suportar navegadores mais antigos, é recomendado o uso de um transpilador como o Babel para converter o código ES6 em uma versão compatível.