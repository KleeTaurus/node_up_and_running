/**
 * Looking up a single A record with lookup()
 */
var dns = require('dns');

dns.lookup('yahoo.com', 4, function (err, result) {
    console.log(result);
});
