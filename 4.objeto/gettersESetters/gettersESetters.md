Getters e Setters são métodos especiais que permitem acessar e modificar os valores de propriedades de um objeto de forma controlada. Eles fornecem uma camada de abstração e permitem a implementação de lógicas adicionais ao obter e definir valores de propriedades.

Vamos entender cada um separadamente:

1. Getters:
    - Um Getter é um método utilizado para obter o valor de uma propriedade. Ele é definido utilizando a palavra-chave **`get`** seguida pelo nome do método.
    - Ao chamar o Getter, o valor da propriedade é retornado, geralmente após alguma lógica de processamento.
    - Exemplo:
        
        ```javascript
        const pessoa = {
          nome: "João",
          sobrenome: "Silva",
          get nomeCompleto() {
            return this.nome + " " + this.sobrenome;
          }
        };
        
        console.log(pessoa.nomeCompleto); // Saída: João Silva
        ```
        
        Neste exemplo, **`nomeCompleto`** é um Getter que retorna a concatenação do **`nome`** e **`sobrenome`** da pessoa. Ao acessar **`pessoa.nomeCompleto`**, o valor retornado será "João Silva".
        
2. Setters:
    - Um Setter é um método utilizado para definir o valor de uma propriedade. Ele é definido utilizando a palavra-chave **`set`** seguida pelo nome do método e um parâmetro para receber o novo valor.
    - Ao chamar o Setter, é possível realizar validações ou processamentos adicionais antes de atribuir o valor à propriedade.
    - Exemplo:
        
        ```javascript
        const pessoa = {
          nome: "",
          set nomeCompleto(valor) {
            if (typeof valor === "string") {
              const partes = valor.split(" ");
              this.nome = partes[0];
              this.sobrenome = partes[1];
            } else {
              console.log("Valor inválido");
            }
          }
        };
        
        pessoa.nomeCompleto = "Maria Souza";
        console.log(pessoa.nome); // Saída: Maria
        console.log(pessoa.sobrenome); // Saída: Souza
        
        pessoa.nomeCompleto = 42; // Valor inválido
        ```
        
        Neste exemplo, **`nomeCompleto`** é um Setter que recebe um valor para definir as propriedades **`nome`** e **`sobrenome`** da pessoa. Antes de atribuir os valores, é realizada uma validação para garantir que o valor seja uma string.
        

Os Getters e Setters podem ser utilizados para adicionar uma camada de lógica aos acessos e atribuições de propriedades de um objeto. Isso é útil para garantir consistência e realizar validações ou transformações nos valores antes de serem utilizados.

É importante mencionar que os Getters e Setters não são funções convencionais, mas sim métodos especiais que são acessados como propriedades de um objeto.