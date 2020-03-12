// novo recurso introduzida no ES2015

const pessoa = {
    nome: 'gabe',
    idade: 5,
    endereco:{
        logradouro: 'rua feliz',
        numero: 132
    }
}

//tirar vários atributos de uma vez só de um objeto

const {nome: n, idade: i} = pessoa   

console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa //Certo: cep vai ser criado 
console.log(logradouro, numero, cep)

const {agencia: {conta, credito}} //ERRO: não pode criar um novo atributo dentro de um atributo inexistente
