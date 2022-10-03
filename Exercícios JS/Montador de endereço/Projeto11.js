// Montador de endereço

    // Criar um objeto endereço que contem as seguintes informações:
        // Rua
        // Cidade
        // CEP
        // exibirEndereco(endereco)
    
let enderecoRuan = {
    Rua : 'Benemérito Martins Schafascheck 23',
    Cidade : 'Mafra-SC',
    CEP : 89304-590,
};

function exibirEndereco(endereco){
    for (let dados in endereco){
        console.log(dados,':',endereco[dados])
    }
};

console.log(exibirEndereco(enderecoRuan));

