const axios = require('axios')

module.exports = function(req, res, next) {
  const info = res.locals.data = {}
  
  info.config = {
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

  Promise.resolve(p1(info))
  .then(() => {
    return Promise.resolve(p2(info))
        .then(() => {
          return Promise.resolve(p3(info))
            .then(() => {
              return Promise.resolve(p4(info))
                .then(() => {
                  return Promise.resolve(p5(info))
                    .then(() => {
                      return Promise.resolve(p6(info))
                        .then(() => {
                          next()
                        })
                  })
              })
          })
      })
  })
}

const p1 = function getDados (info) {
  return axios.get(info.config.urlApi + '/api/Book/Get/' + info.config.idBook)
  .then(function (response) {
    info.config.idProdutoMvc = response.data.Template.IdProdutoMvc
    info.config.aberto = (response.data.Template.Opcoes['Modelo Conteúdo Aberto Texto'] || response.data.Template.Opcoes['Modelo Conteúdo Aberto Mesclado']) ? true : false;
    info.config.mesclado = (response.data.Template.Opcoes['Modelo Conteúdo Aberto Mesclado']) ? true : false;
    info.dados = response.data
    info.dados.Template.Css = JSON.parse(info.dados.Template.Css)

  })
  .catch(function (error) {
    console.error('Erro ao carregar dados do Book.')
    throw error
  })
}

const p2 = function getConteudo (info) {
  return axios.get(info.config.urlApi + '/api/Book/GetConteudoComDadosDaNoticia',
      {
        params: {
          idBook: info.config.idBook,
          idProdutoMvc: info.config.idProdutoMvc,
          exibirConteudoAberto: info.config.aberto,
          apenasParaEmail: true,
        }
      })
  .then(function (response) {
    return info.conteudo = response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar conteudo do Book.')
    throw error
  })
}

const p3 = function getUltimaVersao (info) {
  return axios.get(info.config.urlApi + '/api/BookVersao/GetIdUltimaVersaoDoBook', 
    {
      params: {
        idBook: info.config.idBook 
      }
    })
  .then(function (response) {

    return info.ultimaVersao = response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar Última versão do Book.')
    throw error
  })  
}

const p4 = function getIdProduto (info) {
  return axios.get(info.config.urlApi + '/api/ProdutoMvc/GetIdProduto/' + info.config.idProdutoMvc)
  .then(function (response) {

    return info.idProduto = response.data
  })
  .catch(function (error) {

    console.error('Erro ao carregar o Id do produto')
    throw error
  })  
}

const p5 = function getDadosMvc (info) {
  return axios.get(info.config.urlApi + '/api/ProdutoMvc/GetPropriedadesMvc?id=' + info.config.idProdutoMvc)
  .then(function (response) {

    return info.dadosMvc = response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar dados da MVCs.')
    throw error
  })  
}

const p6 = function getFontesRestritas (info) {
  return axios.get(info.config.urlApi + '/api/FonteRestricaoExibicao/CacheFontesRestritas/')
  .then(function (response) {
    console.log()
    return info.fontesRestritas = response.data
  })
  .catch(function (error) {
    console.error('Erro ao carregar fontes restritas.')
    throw error
  })  
}