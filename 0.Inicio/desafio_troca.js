let a = 7
let b = 94
let t1
let t2
console.log('Antes: ')
console.log(`A: ${a} | B:${b}`)
console.log("====================")

t1 = a
t2 = b
a = t2
b = t1

console.log('Depois: ')
console.log(`A: ${a} | B:${b}`)
