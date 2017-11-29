const axios = require('axios')
const co = require('co')

module.exports = function(req, res, next) {
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
    co(function *() {
      const dados = yield getDados(res)
      const conteudo = yield getConteudo(res)
      const ultimaVersao = yield getUltimaVersao(res)
      const idProduto = yield getIdProduto(res)
      const dadosMvc = yield getDadosMvc(res)
      const fontesRestritas = yield getFontesRestritas(res)

      res.dados = dados
      res.conteudo = conteudo
      res.ultimaVersao = ultimaVersao
      res.idProduto = idProduto
      res.dadosMvc = dadosMvc
      res.fontesRestritas = fontesRestritas

    })
    next()
  }

function getDados (res) {
  return axios.get(res.config.urlApi + '/api/Book/Get/' + res.config.idBook)
  .then(function (response) {
    //como fazer isso funcionar?
    //quero pedir todas as infos da api em ORDEM.
    //promises looks like the right way to do it
    //but are they really? maybe callbacks could help...
    //fuck synchronous programming, i want promises, not callbacks
    res.config.idProdutoMvc = response.data.Template.idProdutoMvc
    res.config.aberto = (response.data.Template.Opcoes['Modelo Conteúdo Aberto Texto'] || response.data.Template.Opcoes['Modelo Conteúdo Aberto Mesclado']) ? true : false;
    res.config.mesclado = (response.data.Template.Opcoes['Modelo Conteúdo Aberto Mesclado']) ? true : false;    
    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados do Book.')
    throw error
  })
}

function getConteudo (res) {
  return axios.get(res.config.urlApi + '/api/Book/Get/' + res.config.idBook,
      {
        params: {
          idBook: res.config.idBook,
          idProdutoMvc: res.config.idProdutoMvc,
          exibitConteudoAberto: res.config.aberto,
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
  return axios.get(res.config.urlApi + '/api/BookVersao/GetIdUltimaVersaoDoBook', {
    params: {
      idBook: res.config.idBook 
    }
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
  return axios.get(res.config.urlApi + '/api/ProdutoMvc/GetIdProduto/' + res.config.idProdutoMvc)
  .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar o Id do produto')
    throw error
  })  
}

function getDadosMvc (res) {
  return axios.get(res.config.urlApi + '/api/ProdutoMvc/GetPropriedadesMvc?id=' + res.config.idProdutoMvc)
  .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados da MVCs.')
    throw error
  })  
}

function getFontesRestritas (res) {
  return axios.get(res.config.urlApi + '/api/FonteRestricaoExibicao/CacheFontesRestritas/')
  .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar fontes restritas.')
    throw error
  })  
}