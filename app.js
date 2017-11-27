let axios = require('axios')
let express = require('express')
let app = express()

let dataGather = require('./middleware/dataGather')
let bookBuild = require('./middleware/bookBuild')

// setting auth for all requests
axios.defaults.headers.common['Authorization'] = 'Basic YmFyYmFhOmJhcmJhYQ=='

app.use(dataGather)
app.use(bookBuild)

app.get('/', function (req, res) {
  res.send()
})

/* function sendIndexPage (req, res) {
  res.send(indexPage) // simple HTML5 text 
}
function sendAboutPage (req, res) {
  res.send(aboutPage) // simple HTML text 
}
app.get('/x', sendIndexPage)
app.get('/about', sendAboutPage)
 */

module.exports = app