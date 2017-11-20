var express = require('express')
var app = express()

// Build Your Route Here
app.get("/", function(req, res){
  app.res.render(views/index.ejs);
})

module.exports = app
