const peso1 = 1.0

const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //função toFixed formata as casa numéricas de um número que vc quer formatar
console.log(media.toString()) //função toString transforme o valor de média em string
console.log(media.toString(2)) //função toString com (2) transforma o número em binário
console.log(typeof media)
console.log(typeof Number)