module.exports = function(req, res, next) {
    const containers = res.locals.data.conteudo[0].ArvoreDeOrdenacao
    const noticias = containers.map((container) => container.items)
    
    const blocosDeNoticia = noticias.reduce((acc, blocoDeNoticias, index) => {
        acc = acc || []
        let bloquinho = blocoDeNoticias.map((noticia) => {
            
            return noticia = {
                id: noticia.IdNoticia,
                fonte: noticia.Fonte,
                titulo: noticia.TituloNoticia
            }
        })
        acc.push(bloquinho)
        return acc
    
    }, [])
    res.locals.blocosDeNoticia = blocosDeNoticia
    next()
}
/* im a total failure */
/* 
TRANSPILE templates.
to JADE. 
*/

/*
Prepare URLs before passing them into jade templates.
do a service for this?
*/ 

//antes de colocar as noticias no book, confere se é fonte restrita.
//template.confereFonteRestrita(noticias[$index].FonteMaxpress.Id, noticias[$index].IdNoticia)