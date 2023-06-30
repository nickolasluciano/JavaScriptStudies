Em JavaScript, as classes são uma forma de criar objetos e definir suas propriedades e métodos. As classes permitem uma abordagem orientada a objetos para a programação, facilitando a organização e estruturação do código.

Para criar uma classe em JavaScript, utilizamos a palavra-chave **`class`** seguida do nome da classe. Dentro da classe, podemos definir propriedades e métodos. Vejamos um exemplo:

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```

Neste exemplo, criamos a classe **`Pessoa`**. Ela possui um construtor que recebe os parâmetros **`nome`** e **`idade`** e os atribui às propriedades **`this.nome`** e **`this.idade`**, respectivamente. Além disso, a classe possui um método chamado **`saudacao()`**, que imprime uma saudação personalizada com o nome e a idade da pessoa.

Agora, podemos instanciar objetos dessa classe utilizando a palavra-chave **`new`**:

```javascript
const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

pessoa1.saudacao(); // Saída: Olá, meu nome é João e tenho 30 anos.
pessoa2.saudacao(); // Saída: Olá, meu nome é Maria e tenho 25 anos.
```

Nesse exemplo, criamos duas instâncias da classe **`Pessoa`**, **`pessoa1`** e **`pessoa2`**, passando os valores para os parâmetros do construtor. Em seguida, chamamos o método **`saudacao()`** em cada objeto, que exibirá a mensagem personalizada para cada pessoa.

É importante ressaltar que, em JavaScript, as classes são construídas sobre a sintaxe de protótipos, que é a base do sistema de herança do JavaScript. Embora a sintaxe de classes forneça uma maneira mais clara e legível de trabalhar com objetos, ela é apenas uma camada de abstração sobre os protótipos subjacentes.

Além disso, as classes em JavaScript podem herdar propriedades e métodos de outras classes usando a palavra-chave **`extends`**. Isso permite criar hierarquias de classes e reutilizar código. Vejamos um exemplo:

```javascript
class Aluno extends Pessoa {
  constructor(nome, idade, matricula) {
    super(nome, idade); // Chama o construtor da classe pai (Pessoa)
    this.matricula = matricula;
  }

  mostrarMatricula() {
    console.log(`Matrícula: ${this.matricula}`);
  }
}
```

Nesse exemplo, criamos a classe **`Aluno`**, que estende a classe **`Pessoa`**. A classe **`Aluno`** possui um construtor que recebe o nome, a idade e a matrícula do aluno. O método **`mostrarMatricula()`** exibe a matrícula do aluno.

Podemos criar objetos da classe **`Aluno`** e acessar tanto os métodos e propriedades herdados da classe **`Pessoa`** quanto os métodos e propriedades específicos da classe **`Aluno`**:

```javascript
const aluno1 = new Aluno("Pedro", 22, "12345");

aluno1.saudacao(); // Saída: Olá, meu nome é Pedro e tenho 22 anos.
aluno1.mostrarMatricula(); // Saída: Matrícula: 12345.
```

Nesse exemplo, criamos uma instância da classe **`Aluno`** chamada **`aluno1`** e chamamos os métodos **`saudacao()`** e **`mostrarMatricula()`**.

Essa é uma introdução básica ao conceito de classes em JavaScript. Elas oferecem uma forma estruturada e orientada a objetos de trabalhar com objetos e ajudam a organizar e reutilizar o código de maneira mais eficiente. À medida que você avança na aprendizagem de JavaScript, pode explorar mais recursos e conceitos relacionados às classes, como herança, métodos estáticos e muito mais.