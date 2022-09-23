// Medidor de velocidade

    // Velocidade máxima de até 70
    // A cada 5km acima do limite + 1 ponto
    // Math.floor()
    // Pontos > 12, retorna uma string "Carteira suspendida"

    // Gerador de número entre 1 e 190
    // Velocidade mínima de 35
    
// Referência: https://www.youtube.com/watch?v=NDoxr30RdIk

function randomNumber(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a
};

const velocidadeCarro = randomNumber(1,190);
console.log(velocidadeCarro);

function verificarVelocidade(aleatorio){
    aleatorio = velocidadeCarro;

    if (aleatorio > 70){
        const pontosAcima = Math.floor((aleatorio - 70) / 5);
        console.log('Pontos na carteira: ',pontosAcima)
        if (pontosAcima >= 12)
            console.log('Carteira suspensa');
    }

    else if (aleatorio < 35){
        const pontosAbaixo = Math.floor((35 - aleatorio) / 5);
        console.log('Pontos na carteira: ',pontosAbaixo)
    }
    
    else if (aleatorio <= 70 || aleatorio >= 35){
        console.log('Velocidade adequada');
    }
}

const medidorVelocidade = verificarVelocidade();
console.log(medidorVelocidade);