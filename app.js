const express = require('express')
const app = express()
// major dependency
const cors = require('cors')
const axios = require('axios')
//middlewares
const dataGather = require('./middleware/dataGather.js')
const bookBuild = require('./middleware/bookBuild.js')

// setting auth for all requests
axios.defaults.headers.common['Authorization'] = 'Basic YmFyYmFhOmJhcmJhYQ=='

//applying global middlewares
app.use(cors)
app.use(dataGather)

app.get('/:idBook', dataGather, function (req, res) {
  res.send('pa')
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
app.listen(3000, () => console.log('Example app listening on port 3000!'))


module.exports = app