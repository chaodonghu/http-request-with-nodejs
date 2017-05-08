var http = require("http");

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  http.get(requestOptions, function(response) {


    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      console.log(data + '\n');
    });
  });
}

getAndPrintHTMLChunks();
