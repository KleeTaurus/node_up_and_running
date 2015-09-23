/**
 * Call dns.resolve()
 */
var dns = require('dns');
dns.resolve('yahoo.com', 'A', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
