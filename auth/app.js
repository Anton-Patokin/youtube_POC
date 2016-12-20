var express = require("express");
var google = require("googleapis");
var app = express();

app.use(express.static('static'));


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2("20079120971-pbb0l788d0f5epakab0e2is67ct6h20k.apps.googleusercontent.com", "iNumbD_eX8OmXFjR6F0_FChp", "http://localhost:3000/authcallback");

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtubepartner',
    'https://www.googleapis.com/youtube/v3/search'
];

var url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
    scope: scopes // If you only need one scope you can pass it as string
});

app.get("/url", function (req, res) {
    res.send(url);
});

var youtube = google.youtube('v3');
app.get('/search', function (req, res) {
    var search = req.query.code;
    var request = youtube.search.list({key: 'AIzaSyB-vZgi5IsycnA1_P43fyyl1NVz70SCEn4', part: 'snippet', q: search});
    return res.json(request);
});
app.get('/chekforcaptions', function (req, res) {
    var videoId = req.query.code;
    var get_captions_for_viseo = youtube.captions.list({
        key: 'AIzaSyB-vZgi5IsycnA1_P43fyyl1NVz70SCEn4',
        part: 'snippet',
        videoId: videoId
    })
    return res.json(get_captions_for_viseo);
});


app.get('/caption', function (req, res) {

    var videoId = req.query.code;

    var youtubedl = require('youtube-dl');
    var url = 'https://youtu.be/'+videoId;
    console.log(url);

    var options = {
        // Write automatic subtitle file (youtube only)
        auto: true,
        // Downloads all the available subtitles.
        all: false,
        // Languages of subtitles to download, separated by commas.
        lang: 'en',
        // The directory to save the downloaded files in.
        cwd: 'static/sub',
    };
    youtubedl.getSubs(url, options, function(err, files) {
        if (err) throw err;
        console.log('subtitle files downloaded:', files);
        return res.json({caption: files});
    });
});


app.get('/read_file', function (req, res) {
    var url ='static'+ req.query.code;
    fs = require('fs')
    fs.readFile(url, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        return res.json({data:data});
        console.log(data);
    });
    // return res.json({url:url});
});


app.get('/api/:paramID1', function (req, res) {
    var youtube = google.youtube('v3');
    var request = youtube.search.list({key: 'AIzaSyB-vZgi5IsycnA1_P43fyyl1NVz70SCEn4', part: 'snippet', q: 'cats'});
    return res.json(request);
});
