var http = require("http");

function getHTML (options, callback) {

  /* Add your code here */

  var body = "";

  http.get(requestOptions, (response) => {    // HTTP Response Callback
    response.setEncoding("utf8");             // Use UTF-8 encoding

    response.on("data", function(data) {      // On Data Received
      body += data;
    });

    response.on("end", function () {
      callback(body);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
