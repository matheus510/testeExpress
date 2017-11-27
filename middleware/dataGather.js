module.exports = {
  dataGather: function(req, res, next) {
    res.locals.config = {
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
    res.locals.dados = getDados()
    res.locals.conteudo = getConteudo()
    res.locals.ultimaVersao = getUltimaVersao()
    res.locals.idProduto = getIdProduto()
    res.locals.dadosMvc = getDadosMvc()
    res.locals.fontesRestritas = getFontesRestritas()
    next()
  }
}

function getDados () {
  axios.get(res.locals.urlApi + '/api/Book/Get/' + res.locals.idBook)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    $log.error('Erro ao carregar dados do Book.')
    throw error
  })
}

function getConteudo () {
  axios.get(res.locals.urlApi + '/api/Book/Get/' + res.locals.idBook,
      {
        params: {
          idBook: res.locals.idBook,
          idProdutoMvc: res.locals.idProdutoMvc,
          exibitConteudoAberto: res.locals.aberto,
          apenasParaEmail: true,
        }
      })
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    $log.error('Erro ao carregar dados do Book.')
    throw error
  })
}

function getUltimaVersao () {
  axios.get(res.locals.urlApi + '/api/BookVersao/GetIdUltimaVersaoDoBook', {
    idBook: res.locals.idBook 
  })
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    $log.error('Erro ao carregar Última versão do Book.')
    throw error
  })  
}

function getIdProduto () {
  axios.get(res.locals.urlApi + '/api/ProdutoMvc/GetIdProduto/' + res.locals.idProdutoMvc)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    $log.error('Erro ao carregar o Id do produto')
    throw error
  })  
}

function getDadosMvc () {
  axios.get(res.locals.urlApi + '/api/ProdutoMvc/GetPropriedadesMvc?id=' + res.locals.idProdutoMvc)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    $log.error('Erro ao carregar dados da MVCs.')
    throw error
  })  
}
