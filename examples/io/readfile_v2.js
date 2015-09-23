/**
 * Reading and deleting a file asynchronously using nested callbacks
 */
var fs = require('fs');

fs.writeFile('todelete.txt', 'This file will be deleted', function (err) {
    if (err) throw err;
    console.log('It\'s saved!');

    fs.readFile('todelete.txt', function (err, data) {
        console.log('War and Peace: ' + data);
        fs.unlink('todelete.txt');
    });
});
