/**
 * Parsing a URL using the URL module
 */
var URL = require('url');
var myUrl = 'http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash'
var parsedUrl = URL.parse(myUrl);
console.log(parsedUrl);
parsedUrl = URL.parse(myUrl, true);
console.log(parsedUrl);
