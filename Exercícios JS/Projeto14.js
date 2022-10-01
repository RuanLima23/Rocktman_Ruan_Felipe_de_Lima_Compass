// Faixa de preço

    // Criar um array de objetos de faixa de preço
    // faixa : tooltip(até preço x, do preço x até o preço y...),minimo,maximo

function criaFaixaPreco(precoMin,tooltip,precoMax){
    let faixa = [
        precoMin,
        tooltip,
        precoMax,
    ]
    precoCompativel = function(){
        if (precoMin < 0 || precoMax > 100000){
            console.log('Preço imcompatível')
        }
        else{
            console.log(faixa)
        }
    }
    const a = precoCompativel();
    console.log(a);
};

let faixaPrecoMouse = criaFaixaPreco(0, 'até 50',50);
console.log(faixaPrecoMouse);

