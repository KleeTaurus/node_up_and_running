/**
 * Creating a readable file stream
 */
var fs = require('fs');
var filehandle = fs.readFile('data.txt', function (err, data) {
    console.log(data.toString('utf8'));
});
