const express = require('express')
const app = express()
// major dependency
const cors = require('cors')
const axios = require('axios')
//middlewares
const dataGather = require('./middleware/dataGather.js')
const bookBuild = require('./middleware/bookBuild.js')

//applying global middlewares
//app.use(cors)
const pug = require('pug')

app.get('/book/:id', dataGather, function (req, res) {
  res.send(res.locals.data)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))


module.exports = app