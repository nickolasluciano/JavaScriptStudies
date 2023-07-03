const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // ser constante impede que eu adicione algo a mais ao array

pilotos.pop() // retira o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona no ultimo elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no inicio
console.log(pilotos)

 //splice pode adicionar ou remover elementos

 //adicionar
 pilotos.splice(2, 0,'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array apartir do indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega do indice até o anterior do final
console.log(algunsPilotos2)
