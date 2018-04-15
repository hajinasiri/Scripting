function getAndPrintHTML (options) {
  var https = require('https');

  var buffer = '';
  https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    response.on('data',function (data) {
      buffer += data;
      console.log('Data Recieved', buffer);
    });
  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(requestOptions);