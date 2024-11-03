const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('hello world')
})

app.listen(9000, function(req, res){
    console.log('runnung...')
})

app.get('/alien', function(req,res){
    const id = req.query.id
    res.send('welcome back alien' + id)
})

app.get('/alien/:id', function (req, res) {
    const id = req.params.id
    res.send('Hey Navin ' + id)
})