// Múltiplos de 3 e 5

    //Criar função que retorna a soma de todos os múltiplos de 3 e 5

somaMultiplos(10);

function somaMultiplos(limite){

    let mut3 = 0;
    let mut5 = 0;

    for (i = 0; i <= limite; i++){
        
        if (i % 3 === 0)
            mut3 += i;
        
        
        if (i % 5 === 0)
            mut5 += i
    }

    console.log(mut3 + mut5);
}
