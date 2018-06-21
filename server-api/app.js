const express = require('express')
const app = express()
const routes = require('./app/controllers/home')
app.use('/', routes)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(3001, () => console.log('Example app listening on port 3001!'))