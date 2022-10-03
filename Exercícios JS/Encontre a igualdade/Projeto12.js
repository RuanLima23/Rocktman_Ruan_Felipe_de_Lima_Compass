// Encontre a igualdade

function Endereco(Rua,Cidade,CEP){
    this.Rua = Rua,
    this.Cidade = Cidade,
    this.CEP = CEP
}

const endereco1 = new Endereco('Benemérito Martins Schafascheck 23','Mafra-SC',89304-590);
const endereco2 = new Endereco('Benemérito Martins Schafascheck 23','Mafra-SC',89304-590);

function comparaEndereco(addres1,addres2){
    // Comparar se as propriedades são iguais
    if(addres1.Rua === addres2.Rua &&
        addres1.Cidade === addres2.Cidade &&
        addres1.CEP === addres2.CEP){
        console.log('Os endereços ',addres1,' e ',addres2,' são iguais!')
    }
    else{
        console.log('Enderenços diferentes!')
    }
}
    
comparaEndereco(endereco1,endereco2);


function memoriaIguais(addres1,addres2){
    // Comparar se a referência do objeto aponta para o mesmo local na memória 
    if(addres1 === addres2){
        console.log('Apontam para a mesma memória')
    }
    else{
        console.log('Memórias diferentes')
    }
}

memoriaIguais(endereco1,endereco2);