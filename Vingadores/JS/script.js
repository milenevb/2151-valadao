function trocar (caminho,titulos,legendas){
    document.getElementById('imagem_principal').src = caminho;
    document.getElementById('titulo').innerText = titulos;
    document.getElementById('legenda').innerText = legendas;
}