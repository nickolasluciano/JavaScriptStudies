console.log(soma(3, 4)) // consigo executar antes
 
// function declaration
function soma(x,  y){
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}

console.log(sub(3, 4)) // obrigado a chamar so depois da declaração

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4)) // obrigado a chamar so depois da declaração