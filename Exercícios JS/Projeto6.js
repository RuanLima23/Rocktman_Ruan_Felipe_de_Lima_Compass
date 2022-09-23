// Encontre o string

    // Criar um método para ler propriedades de um objeto
    // Exibir apenas propriedades do tipo string desse objeto

const jogo = {
    nome: 'God of War',
    genero: 'Ação, RPG',
    plataforma: 'Playstation',
    anoLançamento: 2018
}

const pessoa = {
    nome: 'Ruan',
    idade: 18,
    cidade: 'Mafra'
}

exibePropriedade(jogo)

function exibePropriedade(objeto){
    for(const itens in objeto){
        if (typeof objeto[itens] === 'string')
            console.log(itens, ':', objeto[itens])
        
    }
    
}

