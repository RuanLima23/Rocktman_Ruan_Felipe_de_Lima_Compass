// Média de nota escolar

    // Obter uma nota a partir de um array
    // Média: 70

// Referência função randomNumber: https://www.youtube.com/watch?v=NDoxr30RdIk

function randomNumber(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a
};

const notaEAD = randomNumber(0,50);
const notaGeekie1 = randomNumber(0,25);
const notaGeekie2 = randomNumber(0,25);
const notaProva = randomNumber(0,100);
const notaTrabalho = randomNumber(0,100);
console.log('Notas primeiro trimestre:',notaEAD,notaGeekie1,notaGeekie2,notaProva,notaTrabalho);

const notas1Trimestre = [notaEAD,notaGeekie1,notaGeekie2,notaProva,notaTrabalho];

function mediaDasNotas(notas){
    let soma = 0;
    for (let nota of notas){
        soma += nota;
    }

    const media1 = (soma / 3);

    if (media1 < 70){
        console.log('Aluno abaixo da média')
    }
    else {
        console.log('Aluno acima da média')
    } 

    console.log('Média do aluno: ',Math.floor(media1));
}

mediaDasNotas(notas1Trimestre);
