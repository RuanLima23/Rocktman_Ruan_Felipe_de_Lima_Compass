// Trocando valores

let cor1 = 'Vermelho';
let cor2 = 'Azul';

let cor3 = cor1;

function inverteCores(){
    cor1 = cor2,
    cor2 = cor3
};

inverteCores()
console.log(cor1);
console.log(cor2);