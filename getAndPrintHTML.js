var http = require("http");
var https = require("https");

function getAndPrintHTMLChunks (options) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  http.get(requestOptions, function(response) {

    console.log('Status Code: ', response.statusCode);
    console.log('Headers: ', response.headers);

  var output = "";

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      // console.log(data + '\n');
      output += data;
    });

    response.on('end', function () {
      console.log(output);
    })
  });
}

// getAndPrintHTMLChunks();

function runHttpServer () {
  var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var queryData = url.parse(req.url, true).query;
    console.log(queryData);
    res.end('okay');
  });

  server.listen(3000);
}

runHttpServer();
