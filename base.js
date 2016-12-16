$(function () {
    
});

function init() {
    gapi.client.setApiKey('AIzaSyDEdDVqJplVPylr3s9Sy3uW4q6LaE_lpjE');
    gapi.client.load('youtube','v3',function () {
        //api is ready
    });
}