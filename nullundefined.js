/*
//para objetos 'const a = {name: 'vitor'}, a atribuição de valor é por referência/ponteiro

const a = {name: 'vitor'}
console.log(a)

const b = a
console.log(b)

b.name = 'pedro'

console.log(a)

const c = {idade: '22'}

console.log(c)

//para variáveis let = a atribuião de valor por referência, ou seja, a const recebe o ponteiro onde o valor está guardado, e não o valor.

let x = 'marcos'
console.log(x)

let y = x
console.log(y)

y = 'mateus'

console.log(x)
console.log(y)

*/

//Null e Undefined

let valor //não inicilizada
console.log(valor)  //erro: undefined
//console.log(valor2) //erro: is not defined (pq eu nem declarei a variável)

valor = null //ausência de valor
console.log(valor) //valor = null
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5
console.log(produto)

produto.preco = undefined
console.log(produto)

produto.preco = null //sem preço
console.log(produto)




