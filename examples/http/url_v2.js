/**
 * Parsing a query string with the querystring module in Node REPL
 */
var qs = require('querystring');
console.log(qs.parse('a=1&b=2&c=3'));

// Encoding an object into q query string
var myObj = {'a': 1, 'b': 5, 'c': 'cats',
        'func': function () { console.log('dog') }}
console.log(qs.encode(myObj));
