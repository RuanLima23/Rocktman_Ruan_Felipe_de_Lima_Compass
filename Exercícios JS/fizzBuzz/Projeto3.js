// fizzBuzz

    // Divisível por 3 => fizz
    // Divisível por 5 => Buzz
    // Divisível por 3 e 5 => fizzBuzz
    // Não divisível por 3 e 5 => entrada
    // Não é um número => 'Não é um número'


const num = fizzBuzz(15);
console.log(num);

function fizzBuzz(numero){
    if (typeof numero !== 'number'){
        console.log('Não é um número');
    }
    else if ((numero % 3 === 0 && numero % 5 === 0)){
        console.log('fizzBuzz');
    }
    else if (numero % 3 === 0){
        console.log('fizz');
    }
    else if (numero % 5 === 0){
        console.log('Buzz');
    }
    else {
        console.log(numero);
    }
};
