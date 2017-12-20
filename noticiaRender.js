const fs = require('fs')
const htmlTemplate = require('angular-template')
const basicPath = './templates/views'

const renderNoticias = function () {

}

const bookData = {
    "config": {
        "versao": "",
        "authorization": {
            "Authorization": "Basic YmFyYmFhOmJhcmJhYQ=="
        },
        "idBook": "3000",
        "idBookVersao": "",
        "automatic": "true",
        "urlApi": "http://cloud.boxnet.com.br",
        "urlBookWeb": "http://bookweb.boxnet.com.br",
        "urlBookImpressos": "http://bookimpressos.boxnet.com.br",
        "urlPage": "http://book1.boxnet.com.br",
        "urlVis": "http://visualizacao.boxnet.com.br/#",
        "urlPdf": "http://pdf.boxnet.com.br",
        "idProdutoMvc": 211,
        "aberto": false,
        "mesclado": false
    },
    "dados": {
        "Status": {
            "Id": 6,
            "Nome": "Em andamento",
            "Descricao": "Ordenação/Preview",
            "DataCadastro": "2013-11-12T00:00:00",
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false
        },
        "Template": {
            "TemplateHtml": {
                "TipoTemplateHtml": {
                    "Id": 3,
                    "Nome": "Padrão",
                    "Excluido": false,
                    "Ativo": true,
                    "Configuravel": true
                },
                "Id": 6,
                "Nome": "Padrão",
                "Descricao": "Template para email, padrão de todos os clientes (Layout Antigo)",
                "Arquivo": "padrao.html",
                "Excluido": false,
                "Ativo": true,
                "IdTipoTemplateHtml": 3
            },
            "Id": 235,
            "Nome": "Certisign",
            "Descricao": "",
            "DataCadastro": "2015-04-17T18:15:41.9",
            "DataAtualizacao": "2015-08-19T12:55:04.28",
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "Css": {
                "Css": {
                    "Configuracao": "* {\n  font-family: 'Trebuchet MS', Tahoma, sans-serif;\n}\ntd {\n  vertical-align: top;\n}\n#book-container {\n  width: 650px;\n}\n#book-container .template-header {\n  padding: 40px 0;\n}\n#book-container .template-header .header-img {\n  text-align: center;\n}\n#book-container .template-botoes {\n  padding: 20px 0;\n}\n#book-container .template-botoes td {\n  border-bottom: 2px solid  #004FA7;\n}\n#book-container .template-botoes .botoes {\n  text-align: center;\n  padding: 10px 0;\n  font-size: 12px;\n  background-color:  #004FA7;\n  border-left: 1px solid #FFF;\n}\n#book-container .template-botoes .botoes a {\n  color: #FFF;\n  text-decoration: none;\n}\n#book-container .template-botoes .data-book {\n  font-size: 14px;\n  vertical-align: middle;\n}\n#book-container .template-comentario {\n  padding: 20px 0;\n}\n#book-container .template-comentario h2 {\n  color:  #004FA7;\n}\n#book-container .template-comentario p {\n  font-size: 13px;\n  color: #555555;\n}\n#book-container .template-contador {\n  padding: 20px 0;\n}\n#book-container .template-contador table {\n  background: #F8F8F8;\n  border: 2px solid #EEE;\n}\n#book-container .template-contador table td {\n  padding: 10px 20px;\n}\n#book-container .container-canais .canal-titulo table {\n  width: 100%;\n}\n#book-container .container-canais .canal-titulo table h2 {\n  margin: 25px 0 10px 0;\n  color:  #004FA7;\n}\n#book-container .container-canais .canal-titulo-subnivel {\n  margin: 0 0 10px 0;\n  color:  #004FA7;\n}\n#book-container .container-canais .canal-noticias {\n  padding: 15px;\n  background-color: #F8F8F8;\n  border: 3px solid #EEE;\n}\n#book-container .container-canais .canal-noticias .noticia {\n  width: 50%;\n  padding: 10px;\n  border-collapse: collapse;\n  border-bottom: 1px dotted #CCC;\n  border-left: 1px dotted #CCC;\n}\n#book-container .container-canais .canal-noticias .noticia td {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n#book-container .container-canais .canal-noticias .noticia .noticia-midiadata {\n  color: #555555;\n}\n#book-container .container-canais .canal-noticias .noticia .noticia-midiadata strong {\n  color: #000;\n}\n#book-container .container-canais .canal-noticias .noticia .noticia-midia {\n  color: #555555;\n  padding-right: 10px;\n}\n#book-container .container-canais .canal-noticias .noticia .noticia-data {\n  color: #555555;\n}\n#book-container .container-canais .canal-noticias .noticia .noticia-titulo {\n  font-size: 13px;\n}\n#book-container .container-canais .canal-noticias .noticia .noticia-titulo a {\n  color: #000;\n  font-weight: bold;\n  text-decoration: none;\n}\n#book-container .container-canais .canal-noticias .noticia .noticia-fonte {\n  color: #555555;\n}\n#book-container .container-canais .canal-noticias .noticia .noticia-texto {\n  color: #8b8b8b;\n}\n#book-container .container-canais .canal-noticias .noticia.coluna1 {\n  border-left: 0;\n}\n#book-container .container-canais .canal-noticias-subnivel {\n  border-left: 10px solid #EEE;\n}\n#book-container .container-canais .canal-noticias-subnivel .canal-noticias-subnivel-container {\n  padding-left: 0px;\n}\n#book-container .container-rodape {\n  padding-bottom: 40px;\n}\n#book-container .container-rodape .rodape {\n  height: 40px;\n  border-bottom: 3px solid  #EEEEEE;\n}\n#book-container .container-rodape .rodape td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=estilo.css.map */"
                },
                "Cabecalho": {
                    "Configuracao": ""
                },
                "Noticia": {
                    "Configuracao": ""
                },
                "Rodape": {
                    "Configuracao": "<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n    <tbody>\n        <tr><td height=\"50\"></td></tr>\n        <tr>\n            <td class=\"rodape\" style=\"font-family: Arial;font-size: 11px;vertical-align: middle;background: #F6F6F6;border: 3px solid #EEEEEE;\">\n                <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tbody>\n                    <tr>\n                        <td valign=\"middle\" style=\"font-family: Arial;font-size: 11px;vertical-align: middle\" width=\"20\" height=\"91\">\n                        </td>\n                        <td style=\"font-family: Arial;font-size: 11px;vertical-align: middle\" width=\"65\">\n                            <img style=\"display:block;\" border=\"0\" src=\"http://cloud.boxnet.com.br/EstruturaHtml/Imagens/211/rodape/siga-nos.jpg\" width=\"66\" height=\"24\">\n                        </td>\n                        <td valign=\"middle\" style=\"font-family: Arial;font-size: 11px;vertical-align: middle\" width=\"30\">\n                            <a style=\"color: #00438D;text-decoration: none\" href=\"https://www.facebook.com/Certisign?fref=ts\">\n                                <img style=\"display:block;\" border=\"0\" src=\"http://cloud.boxnet.com.br/EstruturaHtml/Imagens/211/rodape/facebook.jpg\">\n                            </a>\n                        </td>\n                        <td valign=\"middle\" style=\"font-family: Arial;font-size: 11px;vertical-align: middle\" width=\"30\">\n                            <a style=\"color: #00438D;text-decoration: none\" href=\"https://twitter.com/Certisign\">\n                                <img style=\"display:block;\" border=\"0\" src=\"http://cloud.boxnet.com.br/EstruturaHtml/Imagens/211/rodape/twitter.jpg\">\n                            </a>\n                        </td>\n                        <td valign=\"middle\" style=\"font-family: Arial;font-size: 11px;vertical-align: middle\" width=\"30\">\n                            <a style=\"color: #00438D;text-decoration: none\" href=\"http://www.linkedin.com/company/certisign\">\n                                <img style=\"display:block;\" border=\"0\" src=\"http://cloud.boxnet.com.br/EstruturaHtml/Imagens/211/rodape/linkedin.jpg\">\n                            </a>\n                        </td>\n                        <td valign=\"middle\" style=\"font-family: Arial;font-size: 11px;vertical-align: middle\" width=\"30\">\n                            <a style=\"color: #00438D;text-decoration: none\" href=\"http://www.youtube.com/user/mktcertisign\">\n                                <img style=\"display:block;\" border=\"0\" src=\"http://cloud.boxnet.com.br/EstruturaHtml/Imagens/211/rodape/youtube.jpg\">\n                            </a>\n                        </td>\n                        <td valign=\"middle\" style=\"font-family: Arial;font-size: 11px;vertical-align: middle\" width=\"375\" align=\"center\">\n                            <a style=\"color: #00438D;text-decoration: none\" href=\"http://brasileconomico.epaper.grupodia.com.br/contents_brasileconomico/paper142889676651.pdf\">Brasil Econômico</a> |\n                            <a style=\"color: #00438D;text-decoration: none\" href=\"http://www1.folha.uol.com.br/mercado/indicadores\">Indicadores Econômicos</a> |\n                            <a style=\"color: #00438D;text-decoration: none\" href=\"http://www.certisignexplica.com.br/index.php/assinatura-digital-simplifique-as-tomadas-de-decisao-do-condominio\">Blog Certisign Explica</a>\n    \n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n</tbody></table>"
                }
            },
            "IdProdutoMvc": 211,
            "QuantidadeContainers": 1,
            "IdTipoTemplate": 2,
            "IdTemplateHtml": 6,
            "IdsOpcoes": [
                70
            ],
            "Opcoes": {
                "Modelo Padrão": {
                    "Descrição": "Modelo padrão de book",
                    "Estrutural": true,
                    "ConteudoAberto": false
                }
            }
        },
        "Usuario": {
            "Id": 672,
            "IdCliente": 152,
            "Nome": "Gilson de Lima",
            "Email": "gilson@informabrasil.com.br",
            "Username": "gilson",
            "HashSenha": "9008D7278A45EF5A51E4BBB582B3BADB3555D49E",
            "Excluido": false,
            "Ativo": true
        },
        "Id": 3000,
        "IdTemplate": 235,
        "Nome": "TESte II",
        "Comentario": null,
        "DataCadastro": "2015-04-29T09:08:48.127",
        "IdUsuario": 672,
        "IdStatus": 6,
        "Ativo": false,
        "Excluido": true,
        "IdPerfilProdutoMvc": null,
        "QuantidadeNoticias": 0
    },
    "conteudo": [
        {
            "Id": 286,
            "IdTemplate": 235,
            "Nome": "01 - Certisign",
            "DataCadastro": "2015-04-17T18:20:32.193",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [
                {
                    "NomeNivel": "Certisign",
                    "Id": 0,
                    "IdNoticia": 0,
                    "IdContainerNodo": 4382,
                    "IdMidia": 0,
                    "Midia": null,
                    "TipoConteudo": 0,
                    "TituloNoticia": null,
                    "Fonte": null,
                    "NumeracaoPaginas": "",
                    "UltimaPagina": "",
                    "DataCadastro": "0001-01-01T00:00:00",
                    "DataFonte": "0001-01-01T00:00:00",
                    "CorAvaliacao": null,
                    "Avaliacao": null,
                    "Abrangencia": null,
                    "Excluido": false,
                    "expanded": true,
                    "index": 0,
                    "LeadNoticia": null,
                    "Sinopse": null,
                    "UrlNoticia": null,
                    "items": [
                        {
                            "NomeNivel": null,
                            "Id": 90847875,
                            "IdNoticia": 61603493,
                            "IdContainerNodo": 0,
                            "IdMidia": 2,
                            "Midia": "Impresso",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Certificado Digital X Login e Senha. Você sabe a diferença?",
                            "Fonte": "EMPRESAS & NEGÓCIOS/SÃO PAULO",
                            "NumeracaoPaginas": "_EMPRESAS&NEGÓCIOS09",
                            "UltimaPagina": "_EMPRESAS&NEGÓCIOS09",
                            "DataCadastro": "2015-04-23T06:00:01.29",
                            "DataFonte": "2015-04-23T03:00:00",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 20059,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        }
                    ],
                    "ExistemFilhos": true,
                    "IdBookVersao": 0,
                    "ExibirNoEmail": false,
                    "FonteMaxpress": null,
                    "TemNoticiasSimilares": false,
                    "QtdeNoticiasSimilares": 0,
                    "Duracao": 0,
                    "Conteudo": null,
                    "IdsRecortes": [],
                    "Recortes": [],
                    "NoticiaRelacionada": false,
                    "TemNoticiasRelacionadas": false,
                    "OrdemFonte": 0
                }
            ],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF5010000006906FDC881A59F43259AEFDC16F6A9E4573CA736E175C613429B6D1F76DE11A5CC9E91ED423157F0C4F40D7B000F946C9EFCB04C4DC4E1E6D93104C803E45B2C&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60,
                4,
                5
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                },
                "Avaliação": {
                    "Descrição": "Exibe a Avaliação da Notícia"
                },
                "Classificação": {
                    "Descrição": "Exibe a Classificação do Veículo"
                }
            }
        },
        {
            "Id": 397,
            "IdTemplate": 235,
            "Nome": "02 - Parceiros",
            "DataCadastro": "2015-04-29T09:31:10.307",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF501000000C4B531D358C09E1371CD08CF7AEAC674B7C104E8861FB18306CD79A00041AB5B85AA669E1108BF3B2BF0018D389006DF0C8FE0243CD69910DA372FCF88892CDD&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 649,
            "IdTemplate": 235,
            "Nome": "03 - ANCD - Associação Nacional de Certificação Digital",
            "DataCadastro": "2015-06-30T10:52:30.703",
            "DataAtualizacao": null,
            "IdUsuario": 1615,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF5010000005053308D936EC30BD408B222490ACD52FA2FDBD734A11F760FF99EF987787F2A2D317AE593196ACE83DD7E34A76125178705B487CFEFC785847B7D51B8AB9155&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60,
                4,
                5
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                },
                "Avaliação": {
                    "Descrição": "Exibe a Avaliação da Notícia"
                },
                "Classificação": {
                    "Descrição": "Exibe a Classificação do Veículo"
                }
            }
        },
        {
            "Id": 394,
            "IdTemplate": 235,
            "Nome": "04 - Concorrência Nacional",
            "DataCadastro": "2015-04-29T09:30:53.217",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [
                {
                    "NomeNivel": "Concorrência Nacional",
                    "Id": 0,
                    "IdNoticia": 0,
                    "IdContainerNodo": 1657,
                    "IdMidia": 0,
                    "Midia": null,
                    "TipoConteudo": 0,
                    "TituloNoticia": null,
                    "Fonte": null,
                    "NumeracaoPaginas": "",
                    "UltimaPagina": "",
                    "DataCadastro": "0001-01-01T00:00:00",
                    "DataFonte": "0001-01-01T00:00:00",
                    "CorAvaliacao": null,
                    "Avaliacao": null,
                    "Abrangencia": null,
                    "Excluido": false,
                    "expanded": true,
                    "index": 0,
                    "LeadNoticia": null,
                    "Sinopse": null,
                    "UrlNoticia": null,
                    "items": [
                        {
                            "NomeNivel": null,
                            "Id": 90908782,
                            "IdNoticia": 61618051,
                            "IdContainerNodo": 0,
                            "IdMidia": 1,
                            "Midia": "Web",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Inadimplência com cheques atinge 2,32% em março, aponta Serasa Experian",
                            "Fonte": "PORTAL MAXPRESS",
                            "NumeracaoPaginas": "",
                            "UltimaPagina": "",
                            "DataCadastro": "2015-04-23T09:04:17.67",
                            "DataFonte": "2015-04-23T09:01:18",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 4895,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        },
                        {
                            "NomeNivel": null,
                            "Id": 90630987,
                            "IdNoticia": 61548978,
                            "IdContainerNodo": 0,
                            "IdMidia": 1,
                            "Midia": "Web",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Micro e pequenas empresas impulsionam a demanda das empresas por crédito no primeiro trimestre, aponta Serasa Experian",
                            "Fonte": "SERASA EXPERIAN",
                            "NumeracaoPaginas": "",
                            "UltimaPagina": "",
                            "DataCadastro": "2015-04-22T13:04:40.02",
                            "DataFonte": "2015-04-22T16:04:00",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 34933,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        },
                        {
                            "NomeNivel": null,
                            "Id": 89565973,
                            "IdNoticia": 61248135,
                            "IdContainerNodo": 0,
                            "IdMidia": 1,
                            "Midia": "Web",
                            "TipoConteudo": 1,
                            "TituloNoticia": "BTS celebra 20 anos de sucesso da Cards Payment & Identification",
                            "Fonte": "SEGS/SANTOS",
                            "NumeracaoPaginas": "",
                            "UltimaPagina": "",
                            "DataCadastro": "2015-04-17T14:06:18.78",
                            "DataFonte": "2015-04-17T14:03:51",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 34951,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        }
                    ],
                    "ExistemFilhos": true,
                    "IdBookVersao": 0,
                    "ExibirNoEmail": false,
                    "FonteMaxpress": null,
                    "TemNoticiasSimilares": false,
                    "QtdeNoticiasSimilares": 0,
                    "Duracao": 0,
                    "Conteudo": null,
                    "IdsRecortes": [],
                    "Recortes": [],
                    "NoticiaRelacionada": false,
                    "TemNoticiasRelacionadas": false,
                    "OrdemFonte": 0
                }
            ],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF5010000002FB5636C1FDA6BE0EE4BCFC5E9524704194F37DA658BAB7E8176E48EAA5DB01D271CA05DA304579164E5B9ABA3D15BE746BEEA710177D5D270CDD9BD8C5D1D50&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 396,
            "IdTemplate": 235,
            "Nome": "05 - Mercado de Certificação Digital",
            "DataCadastro": "2015-04-29T09:31:05.387",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [
                {
                    "NomeNivel": "Mercado de Certificação Digital",
                    "Id": 0,
                    "IdNoticia": 0,
                    "IdContainerNodo": 1659,
                    "IdMidia": 0,
                    "Midia": null,
                    "TipoConteudo": 0,
                    "TituloNoticia": null,
                    "Fonte": null,
                    "NumeracaoPaginas": "",
                    "UltimaPagina": "",
                    "DataCadastro": "0001-01-01T00:00:00",
                    "DataFonte": "0001-01-01T00:00:00",
                    "CorAvaliacao": null,
                    "Avaliacao": null,
                    "Abrangencia": null,
                    "Excluido": false,
                    "expanded": true,
                    "index": 0,
                    "LeadNoticia": null,
                    "Sinopse": null,
                    "UrlNoticia": null,
                    "items": [
                        {
                            "NomeNivel": null,
                            "Id": 93120150,
                            "IdNoticia": 62056703,
                            "IdContainerNodo": 0,
                            "IdMidia": 1,
                            "Midia": "Web",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Cerca de 1,8 milhão de pessoas entregaram declaração em 24 horas",
                            "Fonte": "VOOZ/TERESINA",
                            "NumeracaoPaginas": "",
                            "UltimaPagina": "",
                            "DataCadastro": "2015-04-29T08:45:54.763",
                            "DataFonte": "2015-04-29T08:09:00",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 29034,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        },
                        {
                            "NomeNivel": null,
                            "Id": 93120151,
                            "IdNoticia": 62056621,
                            "IdContainerNodo": 0,
                            "IdMidia": 1,
                            "Midia": "Web",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Aplicativo permite a cidadãos sugerir projetos de lei",
                            "Fonte": "JCNET/BAURU",
                            "NumeracaoPaginas": "",
                            "UltimaPagina": "",
                            "DataCadastro": "2015-04-29T08:45:38.69",
                            "DataFonte": "2015-04-29T08:00:00",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 35923,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        },
                        {
                            "NomeNivel": null,
                            "Id": 90686300,
                            "IdNoticia": 61563982,
                            "IdContainerNodo": 0,
                            "IdMidia": 1,
                            "Midia": "Web",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Usos do certificado ICP-Brasil têm destaque no III Seminário Nacional de Certificação Digital",
                            "Fonte": "ITI",
                            "NumeracaoPaginas": "",
                            "UltimaPagina": "",
                            "DataCadastro": "2015-04-22T15:45:31.437",
                            "DataFonte": "2015-04-22T14:55:00",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 35939,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        },
                        {
                            "NomeNivel": null,
                            "Id": 90686299,
                            "IdNoticia": 61564006,
                            "IdContainerNodo": 0,
                            "IdMidia": 1,
                            "Midia": "Web",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Combate às fraudes: solução biométrica é apresentada ao ITI",
                            "Fonte": "ITI",
                            "NumeracaoPaginas": "",
                            "UltimaPagina": "",
                            "DataCadastro": "2015-04-22T15:45:32.53",
                            "DataFonte": "2015-04-22T14:47:00",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 35939,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        }
                    ],
                    "ExistemFilhos": true,
                    "IdBookVersao": 0,
                    "ExibirNoEmail": false,
                    "FonteMaxpress": null,
                    "TemNoticiasSimilares": false,
                    "QtdeNoticiasSimilares": 0,
                    "Duracao": 0,
                    "Conteudo": null,
                    "IdsRecortes": [],
                    "Recortes": [],
                    "NoticiaRelacionada": false,
                    "TemNoticiasRelacionadas": false,
                    "OrdemFonte": 0
                }
            ],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF501000000253FCBDBB21D6E0E72DCD35AE7CF94755FF28AE8BE73300D13C72AFAB7A8CDB241FD02E0583028315AA62A4137736BB5AE67FB9F4542F1782304A836280E8EFF&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 1503,
            "IdTemplate": 235,
            "Nome": "06 - Certibio",
            "DataCadastro": "2015-10-02T09:01:54.353",
            "DataAtualizacao": null,
            "IdUsuario": 1615,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF501000000CF715C38AE36255FB5B310FA85919BF41BC8522BE6A8DE2B786A5F2DA515B8BC81E419799836E7D4A7060BCB6BF961E49C0405D8A6F49CA5D9425095D7681D0C&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 402,
            "IdTemplate": 235,
            "Nome": "07 - Mercado de Biometria",
            "DataCadastro": "2015-04-30T10:21:33.737",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF5010000004452527FD25253358121787060D9E2974124976047F3CED9A736F3D1E8EC8F70C154F2FFCF9CE7A9647B16561C529F5973C53DE1D2CDD55025FE261DC471CCA0&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 1504,
            "IdTemplate": 235,
            "Nome": "08 - OneBuy",
            "DataCadastro": "2015-10-02T09:02:21.037",
            "DataAtualizacao": null,
            "IdUsuario": 1615,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF501000000374F826FDEA97757C14B915E68D36A78239A76310D04CB46E409E54F544925D2F439F604B916812D8630D7707BCFC37A4AF7ACD3371965FFDA6442C77615F08A&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 1506,
            "IdTemplate": 235,
            "Nome": "09 - Concorrência OneBuy",
            "DataCadastro": "2015-10-02T09:02:51.84",
            "DataAtualizacao": null,
            "IdUsuario": 1615,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF5010000001DDE6604459E26C9E38938768D0393E5FED62FC54EA4E9F8C0B120A419122EB714F6908A5007EE0AB876DDA49DD7B0486641C2006E82034C5E1F043663941D83&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 403,
            "IdTemplate": 235,
            "Nome": "10 - Mercado de Segurança e Tecnologia da Informação",
            "DataCadastro": "2015-04-30T10:22:30.69",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF501000000730F0EAB546C8100A1E97FDCE6F3FF3E3DC89AB5D5DA0672CE5AE299483BF9EE696A7CA33789516E18C152566242CA98E6F9EC417726467FFC41E11275DF1952&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 395,
            "IdTemplate": 235,
            "Nome": "11 - Concorrência Internacional",
            "DataCadastro": "2015-04-29T09:31:01.183",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF501000000FEC1D68E253898FAFF953B7942381886C2A8A615E31DE1DF5C7C3B817DB4AD369B16FEF9E1C0A05B0A4E2A08044864BEDAB4F3A516D240B1973DC561EC3FFF72&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 404,
            "IdTemplate": 235,
            "Nome": "12 - Mercado Corporativo",
            "DataCadastro": "2015-04-30T20:25:50.68",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF501000000A5435E158E4CB2AF83F0DAE440C933A54E1CF24FE7EE0BD1122DB90FB1C17CC0D4BED434BB798CB5EC845864F8286D55AC9113CC9E184D1E449F2855D41FBE4B&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        },
        {
            "Id": 398,
            "IdTemplate": 235,
            "Nome": "13 - E-commerce",
            "DataCadastro": "2015-04-29T09:31:14.303",
            "DataAtualizacao": null,
            "IdUsuario": 34,
            "Ativo": true,
            "Excluido": false,
            "QuantidadeColunas": 1,
            "ArvoreDeOrdenacao": [
                {
                    "NomeNivel": "E-commerce",
                    "Id": 0,
                    "IdNoticia": 0,
                    "IdContainerNodo": 1661,
                    "IdMidia": 0,
                    "Midia": null,
                    "TipoConteudo": 0,
                    "TituloNoticia": null,
                    "Fonte": null,
                    "NumeracaoPaginas": "",
                    "UltimaPagina": "",
                    "DataCadastro": "0001-01-01T00:00:00",
                    "DataFonte": "0001-01-01T00:00:00",
                    "CorAvaliacao": null,
                    "Avaliacao": null,
                    "Abrangencia": null,
                    "Excluido": false,
                    "expanded": true,
                    "index": 0,
                    "LeadNoticia": null,
                    "Sinopse": null,
                    "UrlNoticia": null,
                    "items": [
                        {
                            "NomeNivel": null,
                            "Id": 93128345,
                            "IdNoticia": 62058047,
                            "IdContainerNodo": 0,
                            "IdMidia": 1,
                            "Midia": "Web",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Vagas de emprego podem ser encontradas em portal",
                            "Fonte": "DOL/BELÉM",
                            "NumeracaoPaginas": "",
                            "UltimaPagina": "",
                            "DataCadastro": "2015-04-29T09:05:10.98",
                            "DataFonte": "2015-04-29T08:50:00",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 35890,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        },
                        {
                            "NomeNivel": null,
                            "Id": 93122063,
                            "IdNoticia": 62056974,
                            "IdContainerNodo": 0,
                            "IdMidia": 2,
                            "Midia": "Impresso",
                            "TipoConteudo": 1,
                            "TituloNoticia": "Fernando Maleski",
                            "Fonte": "GAZETA DO PARANÁ/CASCAVEL/CURITIBA",
                            "NumeracaoPaginas": "PUBLICO02",
                            "UltimaPagina": "PUBLICO02",
                            "DataCadastro": "2015-04-29T08:55:04.097",
                            "DataFonte": "2015-04-29T03:00:00",
                            "CorAvaliacao": "",
                            "Avaliacao": null,
                            "Abrangencia": null,
                            "Excluido": false,
                            "expanded": true,
                            "index": 0,
                            "LeadNoticia": null,
                            "Sinopse": null,
                            "UrlNoticia": null,
                            "items": null,
                            "ExistemFilhos": false,
                            "IdBookVersao": 0,
                            "ExibirNoEmail": true,
                            "FonteMaxpress": {
                                "Id": 8410,
                                "IdPais": 3
                            },
                            "TemNoticiasSimilares": false,
                            "QtdeNoticiasSimilares": 0,
                            "Duracao": 0,
                            "Conteudo": "",
                            "IdsRecortes": [],
                            "Recortes": [],
                            "NoticiaRelacionada": false,
                            "TemNoticiasRelacionadas": false,
                            "OrdemFonte": 0
                        }
                    ],
                    "ExistemFilhos": true,
                    "IdBookVersao": 0,
                    "ExibirNoEmail": false,
                    "FonteMaxpress": null,
                    "TemNoticiasSimilares": false,
                    "QtdeNoticiasSimilares": 0,
                    "Duracao": 0,
                    "Conteudo": null,
                    "IdsRecortes": [],
                    "Recortes": [],
                    "NoticiaRelacionada": false,
                    "TemNoticiasRelacionadas": false,
                    "OrdemFonte": 0
                }
            ],
            "URLVejaMais": "http://mvc.boxnet.com.br/Autenticacao/LoginBook?t=00812955D0A5FF01A9915D2EEB9B0BF50100000027D2B0433FD96F72C5C482431D8FDEB5A53E28EE09248374D596C0E0E474128D7FD247B8A8990039C14D1030AE01807CB69B653C2E12092D01EF041E349FE75A&u=[##TemplateIdUsuario##]",
            "IdsOpcoes": [
                60
            ],
            "Opcoes": {
                "Icone de Midia": {
                    "Descrição": "Exibe o Ícone de Mídia"
                }
            }
        }
    ],
    "ultimaVersao": 4872,
    "idProduto": 2227,
    "dadosMvc": {
        "Id": 211,
        "IdProduto": 2227,
        "IdCliente": 152,
        "Nome": "Certisign - Informa Brasil",
        "CssLayout": {
            "ConfigLess": {
                "corPrincipal": "#00438D",
                "corPrincipalFonte": "#FFFFFF",
                "segundaCor": "#000000",
                "segundaCorFonte": "#FFFFFF",
                "terceiraCor": "#000000",
                "terceiraCorFonte": "#FFFFFF",
                "quartaCor": "#000000",
                "quartaCorFonte": "#FFFFFF",
                "quintaCor": "#000000",
                "quintaCorFonte": "#FFFFFF",
                "corRadio": "#999999",
                "corRadioIcone": "#999999",
                "corRadioFonte": "#FFFFFF",
                "corTv": "#999999",
                "corTvIcone": "#999999",
                "corTvFonte": "#FFFFFF",
                "corWeb": "#999999",
                "corWebIcone": "#999999",
                "corWebFonte": "#FFFFFF",
                "corImpresso": "#999999",
                "corImpressoIcone": "#999999",
                "corImpressoFonte": "#FFFFFF",
                "urlSpriteKendo": "sprite.png"
            },
            "ConfigPagina": {
                "corVisualizacao": true
            }
        },
        "Logotipo": "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",
        "RelatorioAcessoMateriasBook": false
    },
    "fontesRestritas": [
        {
            "Id": 1,
            "IdFonte": 10459,
            "UrlAlternativa": "http://www.valor.com.br/search/apachesolr_search/%22{0}%22?filters=type%3Anoticia_impresso%20-channel%3Ari&solrsort=created%20desc",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-08-18T11:22:25.047",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 2,
            "IdFonte": 10543,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-08-18T11:22:42.793",
            "DataExclusao": null,
            "BuscarUrlTitulo": false
        },
        {
            "Id": 3,
            "IdFonte": 10570,
            "UrlAlternativa": null,
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-08-18T11:23:22.313",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 4,
            "IdFonte": 15056,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 5,
            "IdFonte": 18601,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 6,
            "IdFonte": 31998,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 7,
            "IdFonte": 37894,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 8,
            "IdFonte": 37895,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": false
        },
        {
            "Id": 9,
            "IdFonte": 37896,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 10,
            "IdFonte": 37897,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 11,
            "IdFonte": 37898,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 12,
            "IdFonte": 39841,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 13,
            "IdFonte": 39842,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 14,
            "IdFonte": 39843,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 15,
            "IdFonte": 39844,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 16,
            "IdFonte": 47208,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:11.623",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 17,
            "IdFonte": 37467,
            "UrlAlternativa": null,
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-09-14T15:55:20.823",
            "DataExclusao": null,
            "BuscarUrlTitulo": false
        },
        {
            "Id": 19,
            "IdFonte": 48475,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2015-12-18T08:45:43.127",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 20,
            "IdFonte": 48477,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2016-05-24T08:20:22.67",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 21,
            "IdFonte": 56580,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2016-05-30T07:21:53.547",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 22,
            "IdFonte": 48478,
            "UrlAlternativa": "http://www.valor.com.br/search/apachesolr_search/%22{0}%22?filters=type%3Anoticia_impresso%20-channel%3Ari&solrsort=created%20desc",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2016-10-25T07:12:30.41",
            "DataExclusao": null,
            "BuscarUrlTitulo": true
        },
        {
            "Id": 23,
            "IdFonte": 60278,
            "UrlAlternativa": "http://www.valor.com.br/impresso",
            "Ativo": true,
            "Excluido": false,
            "TextoRestricao": "Por determinação do jornal Valor Econômico, as matérias dos seus veículos (jornal e site) não poderão mais ser disponibilizadas, através do clipping, por empresas do segmento, agências de comunicação e sites corporativos. As notícias devem remeter os usuários para o site do veículo e serem acessadas individualmente através de assinaturas digitais.    O Valor Econômico, através do seu departamento jurídico, determinou que não autoriza a utilização do seu material em qualquer hipótese, sob a pena de serem tomadas  medidas judiciais cabíveis.    Diante disso, a Boxnet continuará realizando o monitoramento do Jornal e do Portal, porém remetendo o usuário à leitura das notícias no site oficial do Valor Econômico.",
            "QuantidadeCaracteresLiberados": 250,
            "DataCadastro": "2016-11-10T09:31:12.957",
            "DataExclusao": null,
            "BuscarUrlTitulo": false
        }
    ]
}

const pathNoticias = function () {
    let conteudoAberto = bookData.dados.Template.Opcoes['Modelo Padrão'].ConteudoAberto
    let pathPadrao = conteudoAberto ? (basicPath + '/noticias/noticias-conteudo-aberto.html') : (basicPath + '/noticias/noticias-conteudo-padrao.html')
    
    return pathPadrao
}
const pathContainers = function () {
    let modeloPadrao = bookData.dados.Template.Opcoes['Modelo Padrão']
    let pathPadrao =  modeloPadrao ? (basicPath + '/padrao-modelos/padrao.html') : (basicPath + '/padrao-modelos/padrao.html')
    
    return pathPadrao
}

let containers = []


bookData.conteudo.map(container => {
    let noticiasContainer = []
    if (container.ArvoreDeOrdenacao !== []) {        
        container.ArvoreDeOrdenacao.map(canal => {

            if (canal.items !== [] && canal.items) {

                canal.items.map(noticia => {

                    let dataNoticia = {
                        container: container,
                        noticia: noticia,
                        dados: bookData.dados,
                        config: bookData.config
                    }
                    let noticiaResult = htmlTemplate(pathNoticias(), dataNoticia)

                    noticiaResult !== [] ? noticias.push(noticiaResult) : null
                })
                let dataContainer = {
                    container: container,
                    dados: bookData.dados,
                    conteudo: bookData.conteudo,
                    config: bookData.config,
                    noticias: noticiasContainer
                }
                if (noticiasContainer !== []) {
                    let containerResult = htmlTemplate(pathContainers(), dataContainer)
                    containerResult !== [] ? containers.push(containerResult) : null
                }
            }
        })
    }
})

fs.writeFile('test.html', containers)
//noticia conteudo aberto
//ht-init="template.confereFonteRestrita(noticias[$index].FonteMaxpress.Id, noticias[$index].IdNoticia)"

//noticia conteudo aberto 
//ht-init="data.noticia.UsarLinkOriginal = (data.template.Opcoes['Link original'] && (data.noticia.IdMidia == 1))