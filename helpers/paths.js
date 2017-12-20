const pathNoticias = function () {
    let conteudoAberto = bookData.dados.Template.Opcoes['Modelo Padrão'].ConteudoAberto
    return conteudoAberto ? (basicPath + '/noticias/noticias-conteudo-aberto.html') : (basicPath + '/noticias/noticias-conteudo-padrao.html')
}
const pathNiveis = function () {
    let conteudoAberto = bookData.dados.Template.Opcoes['Modelo Padrão'].ConteudoAberto
    return conteudoAberto ? (basicPath + '/noticias/noticias-conteudo-aberto.html') : (basicPath + '/noticias/noticias-conteudo-padrao.html')
}
const pathContainers = function () {
    let conteudoAberto = bookData.dados.Template.Opcoes['Modelo Padrão'].ConteudoAberto
    return conteudoAberto ? (basicPath + '/noticias/noticias-conteudo-aberto.html') : (basicPath + '/noticias/noticias-conteudo-padrao.html')
}