const quasrArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quasrArray)
Object.defineProperty(quasrArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable:false
})

console.log(quasrArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quasrArray.toString(), meuArray)