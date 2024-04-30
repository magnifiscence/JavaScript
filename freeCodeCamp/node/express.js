const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/alien', function (req, res) {
    const id = reg.query.id


    res.send('welcome back alien' + id)
})

app.get('/alien/:id', function (reg, res) {
    const id = req.params.id
    res.send('hey tata' + id)
})
app.listen(9000, function (req, res) {
    console.log('running..')
})