var http = require("http");

module.exports = function getHTML (requestOptions, callback) {
    /* Your code here */
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
};
