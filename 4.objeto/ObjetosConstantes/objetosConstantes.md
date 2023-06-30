Em JavaScript, podemos criar objetos constantes usando a palavra-chave **`const`**. Quando declaramos um objeto utilizando **`const`**, estamos garantindo que a referência ao objeto não pode ser alterada. Isso significa que não podemos atribuir um novo objeto a essa variável, mas as propriedades do objeto podem ser modificadas. Vamos ver um exemplo:

```jsx
const pessoa = {
  nome: "João",
  idade: 30
};

pessoa.nome = "Maria";
console.log(pessoa); // { nome: "Maria", idade: 30 }

```

No exemplo acima, declaramos um objeto chamado **`pessoa`** com as propriedades **`nome`** e **`idade`**. Embora **`pessoa`** seja uma constante, ainda podemos modificar as propriedades do objeto, como alterar o valor da propriedade **`nome`** de "João" para "Maria".

No entanto, é importante ressaltar que não podemos atribuir um novo objeto à variável **`pessoa`** declarada com **`const`**. Se tentarmos fazer isso, receberemos um erro:

```jsx
const pessoa = {
  nome: "João",
  idade: 30
};

pessoa = { nome: "Maria", idade: 25 }; // Erro: Assignment to constant variable

```

Nesse caso, ao tentar atribuir um novo objeto à variável **`pessoa`**, recebemos um erro indicando que estamos tentando atribuir a uma variável constante.

Portanto, ao usar **`const`** para declarar um objeto em JavaScript, estamos tornando a referência ao objeto constante, mas ainda podemos modificar as propriedades do objeto. Isso é útil quando queremos garantir que a referência ao objeto não seja reatribuída acidentalmente, mas ainda precisamos alterar as propriedades do objeto.

É importante lembrar que, embora a referência ao objeto seja constante, isso não impede a mutação das propriedades do objeto. Se você deseja tornar o objeto imutável, ou seja, impedir que suas propriedades sejam alteradas, é necessário utilizar técnicas adicionais, como o uso de bibliotecas ou padrões específicos.