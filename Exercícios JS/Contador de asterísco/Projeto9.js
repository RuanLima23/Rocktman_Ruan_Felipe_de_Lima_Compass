// Contador de asteríscos   

    // Criar uma função que exibe a quantidade de asteríscos que aquela linha possui 

contaAsteriscos(10)

function contaAsteriscos(linhas){
    for (let i = 1; i <= linhas; i++){
        let asterisco = '';
        for (let a = 0; a < i; a++){
            asterisco += '*';
        
        }
        console.log(asterisco)
    }
}