require('axios')

//setting auth for all calls
axios.defaults.headers.common['Authorization'] = 'Basic YmFyYmFhOmJhcmJhYQ=='

module.exports = function(options) {
  return function(req, res, next) {
    console.log(req.params.idBook);
    //buildHtmlhere
    next()
  }
}
/*
getDadosMvc
criptografia
getIdProduto
getUltimaVersao
getConteudo
getFontesRestritas
getDados
urlPdf
urlBookImpressos
urlBookWeb
urlVisualizacao
urlApi
urlPage
*/

function getInfo(idBook) {
  this.config = {
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

  
  this.dados = getDados
  this.conteudo = getConteudo;
  this.ultimaVersao = getUltimaVersao;
  this.idProduto = getIdProduto;
  this.criptografia = criptografia;
  this.dadosMvc = getDadosMvc;
  this.fontesRestritas = getFontesRestritas;

}

function getDados () {
  axios.get(this.config.urlApi + '/api/Book/Get/' + this.config.idBook)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    $log.error('Erro ao carregar dados do Book.');
    throw error;
  });
}

function getConteudo () {
  axios.get(this.config.urlApi + '/api/Book/Get/' + this.config.idBook,
      {
        params: {
          idBook: this.config.idBook,
          idProdutoMvc: this.config.idProdutoMvc,
          exibitConteudoAberto: this.config.aberto,
          apenasParaEmail: true,
        }
      })
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    $log.error('Erro ao carregar dados do Book.');
    throw error;
  });
}

function getUltimaVersao () {
  
}