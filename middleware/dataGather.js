module.exports = function(req, res, next) {
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
  res.locals.dados = getDados(res)
  res.locals.conteudo = getConteudo(res)
  res.locals.ultimaVersao = getUltimaVersao(res)
  res.locals.idProduto = getIdProduto(res)
  res.locals.dadosMvc = getDadosMvc(res)
  res.locals.fontesRestritas = getFontesRestritas(res)
  next()
}

const axios = require('axios')


function getDados (res) {
  axios.get(res.locals.urlApi + '/api/Book/Get/' + res.locals.idBook)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados do Book.')
    throw error
  })
}

function getConteudo (res) {
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
    console.error('Erro ao carregar dados do Book.')
    throw error
  })
}

function getUltimaVersao (res) {
  axios.get(res.locals.urlApi + '/api/BookVersao/GetIdUltimaVersaoDoBook', {
    idBook: res.locals.idBook 
  })
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar Última versão do Book.')
    throw error
  })  
}

function getIdProduto (res) {
  axios.get(res.locals.urlApi + '/api/ProdutoMvc/GetIdProduto/' + res.locals.idProdutoMvc)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar o Id do produto')
    throw error
  })  
}

function getDadosMvc (res) {
  axios.get(res.locals.urlApi + '/api/ProdutoMvc/GetPropriedadesMvc?id=' + res.locals.idProdutoMvc)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados da MVCs.')
    throw error
  })  
}

function getFontesRestritas (res) {
  axios.get(res.locals.urlApi + '/api/FonteRestricaoExibicao/CacheFontesRestritas/')
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar fontes restritas.')
    throw error
  })  
}