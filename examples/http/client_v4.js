/**
 * Writing data to an upstream service
 */
var http = require('http');

var opts = {
    host: 'www.kushim.com',
    port: 80,
    path: '/submit/',
    method: 'POST'
};

var req = http.request(opts, function (res) {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        console.log('BODY: ' + data);
    });
});

req.write("my data");
req.write("more of my data");

req.end();
