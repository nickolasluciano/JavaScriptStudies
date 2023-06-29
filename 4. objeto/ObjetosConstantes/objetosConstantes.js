// pessoa -> endereço de memoria -> recebe o valor armazenado na memoria (você pode alterar os atributos mas nao pode atribuir um novo objeto)
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> outro endereço -> outro valor
//pessoa = {nome: 'Ana'}

// trata o objeto congela ele e ignora qualquer nova atribuição
Object.freeze(pessoa)
pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)