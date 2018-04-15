function getAndPrintHTML () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var buffer = '';
  https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    response.on('data',function (data) {
      buffer += data;
      console.log('Data Recieved', buffer);
    });
  });

}
getAndPrintHTML();