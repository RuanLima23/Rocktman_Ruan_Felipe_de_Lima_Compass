import chai from 'chai'
import {soma, subtracao, divisao, multiplicacao, potenciacao, raizQuadrada, bhaskara, mediaEntreValores} from '../src/calculadora.js'

const expect = chai.expect;

describe('Testes das propriedades da adição', function(){
    it('Ordem dos elementos não altera o resultado',function(){
        var soma1 = soma(10,5);
        var soma2 = soma(5,10);
        expect(soma1 === soma2).to.be.equal(true);
    })
    it('Ordem dos elementos em operações com mais de dois elementos não altera o resultado',function(){
        var soma1 = soma(4,6);
        var soma2 = soma(10,6);
        var soma3 = soma(8,14);
        expect(soma1 + (soma2+soma3) === soma3 + (soma1+soma2)).to.be.equal(true);
    })
    it('Ao realizar a soma com zero (número neutro), sempre retorna o mesmo número', function(){
        var soma1 = soma(0,6);
        expect(soma1).to.equal(6);
    })
    it('A soma de seu oposto deve ser zero',function(){
        var soma1 = soma(-2,2);
        var soma2 = soma(-7,7);
        expect(soma1 === soma2).to.be.equal(true);
    })
    it(`Converte 'string' para 'number'`,function(){
        var soma1 = soma('5',5);
        expect(soma1).to.equal(10);
    })
})

describe('Testes das propriedades da subtração', function(){
    it('Ordem dos elementos altera o resultado',function(){
        var sub1 = subtracao(10,5);
        var sub2 = subtracao(12,3);
        expect(sub1 - sub2 !== sub2 - sub1);
    })
    it('A ordem dos elementos não altera o resultado se eles forem iguais',function(){
        var sub1 = subtracao(10,5);
        var sub2 = sub1;
        expect(sub1 - sub2 && sub2 - sub1).to.be.equals(0);
    })
    it('Ao realizar a subtração com zero (número neutro), sempre retorna o mesmo número', function(){
        var sub1 = subtracao(0,9);
        var sub2 = subtracao(0,0);
        expect(sub1 - sub2).to.be.equal(-9);
    })
    it(`Converte 'string' para 'number'`,function(){
        var sub1 = subtracao('-5',-5);
        expect(sub1).to.equal(0);
    })
})

describe('Testes das propriedades de divisão',function(){
    it('Ordem dos elementos altera o resultado, a não ser que os elementos sejam iguais',function(){
        var div1 = divisao(40,10);
        var div2 = divisao(20,10);
        expect(div1 / div2 !== div2 / div1);
    })
    it('A divisão por zero é indefinida',function(){
        var div1 = divisao(10,0);
        expect(div1).to.be.equal(Infinity);
    })
    it(`Converte 'string' para 'number'`,function(){
        var div1 = divisao('10',5);
        expect(div1).to.equal(2);
    })
})

describe('Testes das propriedades de multiplicação',function(){
    it('Ordem dos elementos não altera o resultado',function(){
        var mult1 = multiplicacao(10,2);
        var mult2 = multiplicacao(2,10);
        expect(mult1 === mult2).to.be.equal(true);
        
    })
    it('Fazendo a distributiva',function(){
        var mult1 = multiplicacao(5,2);
        expect(mult1 * (soma(1,3) + soma(4,4))).to.be.equal(120);
    })
    it(`Converte 'string' para 'number'`,function(){
        var mult1 = multiplicacao('10',5);
        expect(mult1).to.be.equal(50);
    })
})

describe('Testes das propriedades da raiz quadrada',function(){
    it('Raiz quadrada de um número',function(){
        var raiz1 = raizQuadrada(25);
        expect(raiz1).to.be.equal(5);
    })
    it('Raiz cúbica de um número',function(){
        var raiz1 = raizQuadrada(8);
        expect(raiz1).to.be.equal(2);
    })
    it('Se o número for negativo',function(){
        var raiz1 = raizQuadrada(-8);
        expect(raiz1).to.be.NaN;
    })
    it(`Converte 'string' para 'number'`,function(){
        var raiz1 = raizQuadrada('16');
        expect(raiz1).to.be.equal(4);
    })
})

describe('Testes das propriedades de potenciação',function(){
    it('Se a base for negativa ou o expoente não for um inteiro',function(){
        var pot1 = potenciacao(1/3,-2);
        expect(pot1).to.be.equals(Infinity);
    })
    it(`Converte 'string' para 'number'`,function(){
        var pot1 = potenciacao('10','2');
        expect(pot1).to.be.equal(100); 
    })
})

describe('Testes das propriedades de bhaskara',function(){
    it('Se delta for < 0',function(){
        var bhask = bhaskara(2,2,1);
        expect(bhask).to.be.equal('Delta negativo');
    })
    it('Se delta for = 0',function(){
        var bhask = bhaskara(1,4,4);
        expect(bhask.x1 === bhask.x2).to.be.equal(true);
    })
    it('Se delta for > 0',function(){
        var bhask = bhaskara(1,5,4);
        expect(bhask.x1 !== bhask.x2).to.be.equal(false);
    })
})

describe('Testes das propriedades de média',function(){
    it('Sempre deve retornar um inteiro',function(){
        var media1 = mediaEntreValores((9,8),7,(8,1));
        expect(Number.isInteger(media1)).to.be.equals(true);
    })
})
//método NUMBER.ISINTEGER():https://acervolima.com/metodo-javascript-number-isinteger/#:~:text=O%20m%C3%A9todo%20Number.,%3B%20caso%20contr%C3%A1rio%2C%20retorna%20falso.