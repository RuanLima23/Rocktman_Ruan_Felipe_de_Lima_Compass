// Par ou ímpar
    
    // Receber uma quantidade de valores para avaliar
    // Função que exibe se o valor é par ou ímpar

function parOuImpar(valor){
    for (let i = 0; i <= valor; i++){

        if (i % 2 === 0){
            console.log(i,' é par');
        }

        else if (i % 2 !== 0){
            console.log(i,' não é par');
        }
    }

};

parOuImpar(18);

