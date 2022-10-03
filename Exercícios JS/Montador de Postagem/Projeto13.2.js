// Constructor function da postagem 
    //criar objeto postagem
    //titulo, mensagem, autor, visualizações, comentários, estaAoVivo

function Post(titulo,mensagem,autor,visualizacoes){
        this.titulo = titulo, 
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = visualizacoes,
        this.comentarios = [{autor: 'Joaquim', comentario: 'comentário teste'}],
        this.estaAoVivo = function(){
            return true
        }
    
}

const novoPost = new Post('Copa do mundo','Esse post é sobre a copa do mundo de 2022','Ruan',20);
console.log(novoPost);
