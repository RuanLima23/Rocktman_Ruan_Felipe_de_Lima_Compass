// Segurança Virtual

function buscaNome(){
    listaMatheus = ['Ruan','Allan','Estela','João','Alisson']
    convidado = document.getElementById('nome_convidado').value;
    if (listaMatheus.includes(convidado)){
        var aniversariante = document.getElementById('nome_quem_convidou').value;
            if (aniversariante === 'Matheus'){
                document.getElementById('permissão').innerText = 'Pode entrar';
            }
            else {
                document.getElementById('permissão').innerText = 'Não pode entrar';
            }  
    }
    else{
        document.getElementById('permissão').innerText = 'Não pode entrar';
    }
}


