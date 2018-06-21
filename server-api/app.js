const express = require('express')
const app = express()
const routes = require('./app/controllers/home')
app.use('/', routes)

app.listen(3001, () => console.log('Example app listening on port 3000!'))