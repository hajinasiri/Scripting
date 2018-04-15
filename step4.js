function getAndPrintHTML (options,callback) {
  var https = require('https');
  https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    response.on('data',function (data) {callback(data)});
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function printHTML (html) {
  console.log(html);
};

getAndPrintHTML(requestOptions,printHTML);