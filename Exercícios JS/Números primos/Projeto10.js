// Números primos

    // Criar uma função para exibir os números primos

numeroPrimo(15);

function numeroPrimo(numeroLimite){
    for(let i = 2; i <= numeroLimite; i++){
        let primo = true;
        for(let divisor = 2; divisor < i; divisor++){
            if(i % divisor === 0)
                primo = false;     
        }
        if(primo == true){
            console.log(i) 
        }
   
    }
}

// Imprime numeros primos apenas de 1 a 5:
    
        // exibirNumerosPrimos(15);
        // function exibirNumerosPrimos(numero){
        //     for(num = 1; num <= numero; num++){
        //         if (num % 2 !== 0){
        //             console.log(num)
        //         }
        //     }
        // }

// Método break quebrando o algorítmo

        // function numeroPrimo(numeroLimite){
        //     for(let numero = 2; numero <= numeroLimite; numero++){
        //         let ehprimo = true;

        //         for(let divisor = 2; divisor < numero; divisor++){
        //             if(numero % divisor === 0)
        //                 ehprimo = false;
        //                 break;
        //             }
        //             if (ehprimo == true){
        //             console.log(numero)
        //             }
        //     }
        // }