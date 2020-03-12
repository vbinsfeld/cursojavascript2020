console.log(Math.ceil(4.78))

const objeto1 = {}
objeto1.nome = 'vitor'
objeto1['nome'] = 'pedro'

console.log(objeto1.nome)

function Obj (nome){
    this.nome = nome
}

const obj2 = new Obj()
obj2.nome = 'gabe'
console.log(obj2.nome)

const obj3 = new Obj('junior')
console.log(obj3.nome)
