// Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a+b)

}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6 ,7, 8, 9)

// Funcao com retorno

function soma(a, b = 2){
    return a + b

}

console.log(soma(23123132))
console.log(soma(2, 5))
console.log(soma())

