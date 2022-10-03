// Montador de postagem de blog

    // Deve conter as seguintes propriedades:
    /*
    Título
    Mensagem
    Autor
    Visualizações
    Comentários
        array (autor,mensagem)
    estaAoVivo
    */

let postagem = {
    titulo: 'Copa do Mundo começará com França em queda, Holanda em alta, Brasil e Argentina candidatos ao título',
    autor: 'Blog do PVC',
    visualizacoes: 1000,
    comentarios: [{autor: 'Joaquim:'},{mensagem: 'Ótimas informações, ano de copa todo mundo animado!'}],
    estaAoVivo: true || false
}

for(let chave in postagem) {
    console.log(chave,':',postagem[chave]);
}