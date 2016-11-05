const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use('/src', express.static(__dirname + "/src"));

http.listen(8080, function(){
	console.log('listening on *:8080');
});

app.get('/getImages', function(req, res){
    console.log('hit')
})
