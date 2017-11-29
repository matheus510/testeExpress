module.exports = function(req, res, next) {
    console.log('entrou middleware')
    res.config = {
      'versao': '',
      'authorization': {'Authorization': 'Basic YmFyYmFhOmJhcmJhYQ=='},
      'idBook': req.params.id,
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
    next()
  }

const axios = require('axios')


function getDados (res) {
  axios.get(res.config.urlApi + '/api/Book/Get/' + res.config.idBook)
  .then(function (response) {
    console.log(response.data)
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados do Book.')
    throw error
  })
}

function getConteudo (res) {
  axios.get(res.config.urlApi + '/api/Book/Get/' + res.config.idBook,
      {
        params: {
          idBook: res.config.idBook,
          idProdutoMvc: res.config.idProdutoMvc,
          exibitConteudoAberto: res.config.aberto,
          apenasParaEmail: true,
        }
      })
  .then(function (response) {
    console.log(response.data)
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados do Book.')
    throw error
  })
}

function getUltimaVersao (res) {
  axios.get(res.config.urlApi + '/api/BookVersao/GetIdUltimaVersaoDoBook', {
    idBook: res.config.idBook 
  })
  .then(function (response) {
    console.log(response.data)
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar Última versão do Book.')
    throw error
  })  
}

function getIdProduto (res) {
  axios.get(res.config.urlApi + '/api/ProdutoMvc/GetIdProduto/' + res.config.idProdutoMvc)
  .then(function (response) {
    console.log(response.data)
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar o Id do produto')
    throw error
  })  
}

function getDadosMvc (res) {
  axios.get(res.config.urlApi + '/api/ProdutoMvc/GetPropriedadesMvc?id=' + res.config.idProdutoMvc)
  .then(function (response) {
    console.log(response.data)
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados da MVCs.')
    throw error
  })  
}

function getFontesRestritas (res) {
  axios.get(res.config.urlApi + '/api/FonteRestricaoExibicao/CacheFontesRestritas/')
  .then(function (response) {
    console.log(response.data)
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar fontes restritas.')
    throw error
  })  
}