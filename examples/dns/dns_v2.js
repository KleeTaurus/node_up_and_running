/**
 * Using resolve() versus resolveMx()
 */
var dns = require('dns');
dns.resolve('yahoo.com', 'MX', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

dns.resolveMx('yahoo.com', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
