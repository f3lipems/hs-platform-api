var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('HS Server')
})

app.listen(3000)