// par nome / valor

const saudacao = 'Opa' // contexto léxico 1 (local fisico onde a variavel foi definido)

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhandos de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
