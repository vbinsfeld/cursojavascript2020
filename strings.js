const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(8)) //não mostra nada pois não achou nada
console.log(escola.charCodeAt(3)) //mostra o código do valor unicode: 51

console.log(escola.indexOf('r'))
console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola.concat('!!!!')))
console.log('Escola ' + (escola + ('!!!!')))
console.log('3' + 2) //vai concatenar pq o mais faz sentido no mundo da concatenação
console.log('3' - 2) //não vai concatenar pq não faz sentido o - no munda da concatenação

console.log(escola.replace(3,'e'))

console.log('Ana, Maria,Pedro'.split(','))

console.log('Ana, Maria,Pedro'.split(/,/))









