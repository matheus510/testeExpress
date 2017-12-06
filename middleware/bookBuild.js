module.exports = function(req, res, next) {
    const info = res.locals.data

    const containers = info.conteudo.ArvoreDeOrdenacao
    const noticias = containers.map(container => container.items)

    noticias.reduce(noticia => {
        let id = noticia.IdNoticia
        let lead = noticia.LeadNoticia
        let titulo = noticia.TituloNoticia
        let fonte = noticia.Fonte
        return {
            id,
            fonte,
            titulo,
            lead
        }
    }, {})
    /* res.data.dados.Template.TemplateHtml */
  
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