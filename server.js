const express = require('express');
const app = express();
const http = require('http').Server(app);
const fs = require('fs');

app.use('/src', express.static(__dirname + "/src"));

http.listen(3000, function(){
	console.log('listening on *:3000');
});

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
})
                              
app.get('/images', function(req, res){
    const folder = req.query.folder
    var files = fs.readdirSync(`./src/images/${folder}/`)
    files = JSON.stringify(files)
    res.send(files)
})
