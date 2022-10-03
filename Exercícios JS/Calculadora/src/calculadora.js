
export function soma(a,b){

    return parseInt(a) + parseInt(b)

}

export function subtracao(a,b){
    
    return parseInt(a) - parseInt(b)

}

export function divisao(a,b){
    return parseInt(a) / parseInt(b)
}

export function multiplicacao(a,b){
    return parseInt(a) * parseInt(b)
}

export function potenciacao(a,b){
    return Math.floor(Math.pow(parseInt(a),parseInt(b)))
}

export function raizQuadrada(x){
    return Math.floor(Math.sqrt(parseInt(x)))
}

export function bhaskara(a,b,c){
    parseInt(a) && parseInt(b) && parseInt(c);
    const delta = b * b - 4 * a * c;
    if (delta < 0){
        return 'Delta negativo';
    }
    else{
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        return x1;
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return x2;
    }
}

export function mediaEntreValores(a,b,c){
    parseInt(a) && parseInt(b) && parseInt(c);
    const media = (a + b + c) / 3;
    return Math.floor(media);
}


export default {soma, subtracao, divisao, multiplicacao, potenciacao, raizQuadrada, bhaskara, mediaEntreValores};

//potenciação: https://www.delftstack.com/pt/howto/javascript/javascript-exponent/#:~:text=Math.-,pow()%20para%20obter%20o%20expoente%20em%20JavaScript,expoente%20n%C3%A3o%20for%20um%20inteiro.
//raiz quadrada: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
//bhaskara: https://franciscochaves.com.br/blog/formula-de-bhaskara-em-javascript