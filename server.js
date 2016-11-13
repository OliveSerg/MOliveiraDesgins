const express = require('express');
const app = express();
const http = require('http').Server(app);
const fs = require('fs');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const emailInfo = require('./email_info.js')

app.use('/src', express.static(__dirname + "/src"));

http.listen(3000, function(){
	console.log('listening on *:3000');
});

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS');
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

app.post('/mail', function(req, res){
    console.log(emailInfo)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: emailInfo.user,
                clientId: emailInfo.clientId,
                clientSecret: emailInfo.clientSecret,
                refreshToken: emailInfo.refreshToken,
                accessToken: emailInfo.accessToken
            })
        }
    })
    mailOptions = {
        from: '<moliveira.designs@gmail.com>',
        to: 'oliveserg@gmail.com', 
        subject: 'Email Example',
        text: 'Cool this sent'
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send(error)
        } else {
            console.log(info);
            res.send(info)
        }
    })
})
