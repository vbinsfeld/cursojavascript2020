//Aula 23. Array

//array em javascript é infinito e heterogêneo, pode ter números e string misturados (i.e. java é homogêneo)

/*jshint esversion: 6 */

const valores = [7.7, 8.9, 6.3, 9.2];

//console.log(valores[0], valores[3]);
//console.log(valores[1] / 2);
//console.log((valores[2] + 1.7) + " texto qualquer " + valores[0]);
//console.log(valores[4]);

valores[4] = 23

console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null, 'texto')
console.log(valores)
console.log(valores.length)

valores.pop() //retira o último valor do array, no caso 'texto'
console.log(valores)
console.log(valores.length)

console.log(valores.pop())
console.log(valores.pop())

delete valores[0]

console.log(valores)

console.log(typeof valores)




