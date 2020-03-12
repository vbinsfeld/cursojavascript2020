// par nome/valor

const saudacao = 'olá' // contexto léxico #1 (onde fisicamente o nome e valor foi declarado)

function exec() {
    const saudacao = 'falaaaa' // contexto léxico #2
    return saudacao
}

// Objesto são grupoas aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco:{
        logradouro: 'rua mto legal',
        numero:132
    }
}

console.log(saudacao)

console.log(exec())

console.log(Cliente.nome)
console.log(Cliente.idade)
console.log(Cliente.endereco.logradouro)
console.log(Cliente.endereco.numero)
