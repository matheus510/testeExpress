const axios = require('axios')

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

    Promise.resolve(p1(res))
    .then(() => {
        return Promise.resolve(p2(res))
          .then(() => {
            return Promise.resolve(p3(res))
              .then(() => {
                return Promise.resolve(p4(res))
                  .then(() => {
                    return Promise.resolve(p5(res))
                      .then(() => {
                        return Promise.resolve(p6(res))
                    })
                })
            })
        })
    })
    next()
  }

const p1 = function getDados (res) {
  return axios.get(res.config.urlApi + '/api/Book/Get/' + res.config.idBook)
  .then(function (response) {
    res.config.idProdutoMvc = response.data.Template.IdProdutoMvc
    res.config.aberto = (response.data.Template.Opcoes['Modelo Conteúdo Aberto Texto'] || response.data.Template.Opcoes['Modelo Conteúdo Aberto Mesclado']) ? true : false;
    res.config.mesclado = (response.data.Template.Opcoes['Modelo Conteúdo Aberto Mesclado']) ? true : false;
    res.dados = JSON.stringify(response.data)

  })
  .catch(function (error) {
    console.error('Erro ao carregar dados do Book.')
    throw error
  })
}

const p2 = function getConteudo (res) {
  return axios.get(res.config.urlApi + '/api/Book/GetConteudoComDadosDaNoticia',
      {
        params: {
          idBook: res.config.idBook,
          idProdutoMvc: res.config.idProdutoMvc,
          exibirConteudoAberto: res.config.aberto,
          apenasParaEmail: true,
        }
      })
  .then(function (response) {
    return res.conteudo = JSON.stringify(response.data)
  })
  .catch(function (error) {
    console.error('Erro ao carregar conteudo do Book.')
    throw error
  })
}

const p3 = function getUltimaVersao (res) {
  return axios.get(res.config.urlApi + '/api/BookVersao/GetIdUltimaVersaoDoBook', 
    {
      params: {
        idBook: res.config.idBook 
      }
    })
  .then(function (response) {

    return res.ultimaVersao = response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar Última versão do Book.')
    throw error
  })  
}

const p4 = function getIdProduto (res) {
  return axios.get(res.config.urlApi + '/api/ProdutoMvc/GetIdProduto/' + res.config.idProdutoMvc)
  .then(function (response) {

    return res.idProduto = response.data
  })
  .catch(function (error) {

    console.error('Erro ao carregar o Id do produto')
    throw error
  })  
}

const p5 = function getDadosMvc (res) {
  return axios.get(res.config.urlApi + '/api/ProdutoMvc/GetPropriedadesMvc?id=' + res.config.idProdutoMvc)
  .then(function (response) {

    return res.dadosMvc = JSON.stringify(response.data)
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados da MVCs.')
    throw error
  })  
}

const p6 = function getFontesRestritas (res) {
  return axios.get(res.config.urlApi + '/api/FonteRestricaoExibicao/CacheFontesRestritas/')
  .then(function (response) {
    console.log()
    return res.fontesRestritas = JSON.stringify(response.data)
  })
  .catch(function (error) {
    console.error('Erro ao carregar fontes restritas.')
    throw error
  })  
}