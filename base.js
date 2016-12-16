
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

