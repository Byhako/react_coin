'use strict'
const express = require('express')
const app = express()

const compression = require('compression')
app.use(compression())

app.use(express.static('build'))

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`)
})

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log('Server listening on port', PORT)
})
