module.exports = function (options) {
  return function(req, res, next) {
    res.config = {
      'versao': '',
      'authorization': {'Authorization': 'Basic YmFyYmFhOmJhcmJhYQ=='},
      'idBook': idBook,
      'idBookVersao': '',
      'automatic': 'true',
      'urlApi': 'http://cloud.boxnet.com.br',
      'urlBookWeb': 'http://bookweb.boxnet.com.br',
      'urlBookImpressos': 'http://bookimpressos.boxnet.com.br',
      'urlPage': 'http://book1.boxnet.com.br',
      'urlVis': 'http://visualizacao.boxnet.com.br/#',
      'urlPdf': 'http://pdf.boxnet.com.br'
    }
    res.dados = getDados(res)
    res.conteudo = getConteudo(res)
    res.ultimaVersao = getUltimaVersao(res)
    res.idProduto = getIdProduto(res)
    res.dadosMvc = getDadosMvc(res)
    res.fontesRestritas = getFontesRestritas(res)
  }
  next()
}

const axios = require('axios')


function getDados (res) {
  axios.get(res.urlApi + '/api/Book/Get/' + res.idBook)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados do Book.')
    throw error
  })
}

function getConteudo (res) {
  axios.get(res.urlApi + '/api/Book/Get/' + res.idBook,
      {
        params: {
          idBook: res.idBook,
          idProdutoMvc: res.idProdutoMvc,
          exibitConteudoAberto: res.aberto,
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
  axios.get(res.urlApi + '/api/BookVersao/GetIdUltimaVersaoDoBook', {
    idBook: res.idBook 
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
  axios.get(res.urlApi + '/api/ProdutoMvc/GetIdProduto/' + res.idProdutoMvc)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar o Id do produto')
    throw error
  })  
}

function getDadosMvc (res) {
  axios.get(res.urlApi + '/api/ProdutoMvc/GetPropriedadesMvc?id=' + res.idProdutoMvc)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados da MVCs.')
    throw error
  })  
}

function getFontesRestritas (res) {
  axios.get(res.urlApi + '/api/FonteRestricaoExibicao/CacheFontesRestritas/')
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar fontes restritas.')
    throw error
  })  
}