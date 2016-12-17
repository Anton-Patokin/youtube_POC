
// // The client ID is obtained from the {{ Google Cloud Console }}
// // at {{ https://cloud.google.com/console }}.
// // If you run this code from a server other than http://localhost,
// // you need to register your own client ID.
// var OAUTH2_CLIENT_ID = '235978047404-i0kqa23r5d84erlt3o8v0ml5k3nfatp2.apps.googleusercontent.com';
// var OAUTH2_SCOPES = [
//     'https://www.googleapis.com/auth/youtube'
// ];
//
// // Upon loading, the Google APIs JS client automatically invokes this callback.
// googleApiClientReady = function() {
//     gapi.auth.init(function() {
//         window.setTimeout(checkAuth, 1);
//     });
// }
//
// // Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// // If the currently logged-in Google Account has previously authorized
// // the client specified as the OAUTH2_CLIENT_ID, then the authorization
// // succeeds with no user intervention. Otherwise, it fails and the
// // user interface that prompts for authorization needs to display.
// function checkAuth() {
//     gapi.auth.authorize({
//         client_id: OAUTH2_CLIENT_ID,
//         scope: OAUTH2_SCOPES,
//         immediate: true
//     }, handleAuthResult);
// }
//
// // Handle the result of a gapi.auth.authorize() call.
// function handleAuthResult(authResult) {
//     if (authResult && !authResult.error) {
//         // Authorization was successful. Hide authorization prompts and show
//         // content that should be visible after authorization succeeds.
//         $('.pre-auth').hide();
//         $('.post-auth').show();
//         loadAPIClientInterfaces();
//     } else {
//         // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
//         // client flow. The current function is called when that flow completes.
//         $('#login-link').click(function() {
//             gapi.auth.authorize({
//                 client_id: OAUTH2_CLIENT_ID,
//                 scope: OAUTH2_SCOPES,
//                 immediate: false
//             }, handleAuthResult);
//         });
//     }
// }
//
// // Load the client interfaces for the YouTube Analytics and Data APIs, which
// // are required to use the Google APIs JS client. More info is available at
// // https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
// function loadAPIClientInterfaces() {
//     gapi.client.load('youtube', 'v3', function() {
//         handleAPILoaded();
//     });
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// function start() {
//     // 2. Initialize the JavaScript client library.
//     gapi.client.init({
//         'apiKey': 'YOUR_API_KEY',
//         'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
//         // clientId and scope are optional if auth is not required.
//         'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//         'scope': 'profile',
//     }).then(function() {
//         // 3. Initialize and make the API request.
//         return gapi.client.people.people.get({
//             resourceName: 'people/me'
//         });
//     }).then(function(response) {
//         console.log(response.result);
//     }, function(reason) {
//         console.log('Error: ' + reason.result.error.message);
//     });
// };
// 1. Load the JavaScript client library.


// function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

// (function($) {
//     $("form").on("submit", function(e) {
//         e.preventDefault();
//         // prepare the request
//         var request = gapi.client.youtube.search.list({
//             part: "snippet",
//             type: "video",
//             q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
//             maxResults: 3,
//             order: "viewCount",
//             publishedAfter: "2015-01-01T00:00:00Z"
//         });
//         // execute the request
//         request.execute(function(response) {
//             console.log(response);
//             // var results = response.result;
//             // $("#results").html("");
//             // $.each(results.items, function(index, item) {
//             //     $.get("tpl/item.html", function(data) {
//             //         $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
//             //     });
//             // });
//             // resetVideoHeight();
//         });
//     });
//
//     // $(window).on("resize", resetVideoHeight);
// })(jQuery);

// function resetVideoHeight() {
//     $(".video").css("height", $("#results").width() * 9/16);
// }
//
function inite() {
    console.log('ready');

    gapi.client.init({
        'apiKey': 'AIzaSyDEdDVqJplVPylr3s9Sy3uW4q6LaE_lpjE',
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        // clientId and scope are optional if auth is not required.
        // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
        // 'scope': 'profile',
    }).then(function() {
        // 3. Initialize and make the API request.
        return gapi.client.people.people.get({
            resourceName: 'people/me'
        });
    }).then(function(response) {
        console.log(response.result);
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
};
//
