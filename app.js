var express = require('express')
var app = express()

function sendIndexPage (req, res) {
  res.send(indexPage) // simple HTML5 text 
}
function sendAboutPage (req, res) {
  res.send(aboutPage) // simple HTML text 
}
app.get('/', sendIndexPage)
app.get('/about', sendAboutPage)
module.exports = app