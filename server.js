import express from 'express';
const app = express();
const http = require('http').Server(app);

app.use('/src', express.static(__dirname + "/src"));

app.get('/getImages', function(req, res){
    console.log('hit')
})
