var express = require("express");
var google = require("googleapis");


var app = express();

app.use(express.static('static'));


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2("20079120971-pbb0l788d0f5epakab0e2is67ct6h20k.apps.googleusercontent.com", "iNumbD_eX8OmXFjR6F0_FChp", "http://localhost:3000/authcallback");

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtubepartner'
];

var url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
    scope: scopes // If you only need one scope you can pass it as string
});

app.get("/url", function(req, res) {
    res.send(url);
});

app.get("/tokens", function(req, res) {
    var code = req.query.code;
    console.log(code);
    oauth2Client.getToken(code, function(err, tokens) {
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }
        console.log("allright!!!!");
        console.log(err);
        console.log(tokens);
        oauth2Client.setCredentials(tokens);
        // res.send(tokens); //geen idee wat dat is moet research doen
        
    });
});