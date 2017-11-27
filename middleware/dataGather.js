//setting auth for all calls
axios.defaults.headers.common['Authorization'] = 'Basic YmFyYmFhOmJhcmJhYQ=='

module.exports = function(options) {
  return function(req, res, next) {
    res.locals.dados = {
      'versao': '',
      'authorization': {'Authorization': 'Basic YmFyYmFhOmJhcmJhYQ=='},
      'idBook': req.params.idBook,
      'idBookVersao': '',
      'automatic': 'true',
      'urlApi': 'http://cloud.boxnet.com.br',
      'urlBookWeb': 'http://bookweb.boxnet.com.br',
      'urlBookImpressos': 'http://bookimpressos.boxnet.com.br',
      'urlPage': 'http://book1.boxnet.com.br',
      'urlVis': 'http://visualizacao.boxnet.com.br/#',
      'urlPdf': 'http://pdf.boxnet.com.br'
    }
    next()
  }
}
