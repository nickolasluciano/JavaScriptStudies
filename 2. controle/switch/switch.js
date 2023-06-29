const imprimriResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimriResultado(10)
imprimriResultado(9)
imprimriResultado(8)
imprimriResultado(7)
imprimriResultado(6)
imprimriResultado(5)
imprimriResultado(4)
imprimriResultado(3)
imprimriResultado(2)
imprimriResultado(1)
imprimriResultado(0)
imprimriResultado(-1)