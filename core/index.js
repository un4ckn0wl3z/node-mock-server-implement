
var mockServer = require('node-mock-server');
var path = require('path');

mockServer({
	'restPath': path.join(__dirname, '/rest'),
	'uiPath': '/',
	'title': 'Api mock server',
	'version': 1,
	'urlBase': 'http://localhost:3001',
	'urlPath': '/rest/v1',
	'port': 3001,
	'contentType': 'application/json',
	'accessControlExposeHeaders': 'X-Total-Count',
	'accessControlAllowOrigin': '*',
	'accessControlAllowMethods': 'GET, POST, PUT, OPTIONS, DELETE, PATCH, HEAD',
	'accessControlAllowHeaders': 'origin, x-requested-with, content-type',
	'accessControlAllowCredentials': 'true',
	'headers': {},
	'open': true,
	'dirName': __dirname,
	'funcPath': [
		__dirname + '/util'
	],
	'middleware': {
		'/rest/middleware/#{name}/GET'(serverOptions, requestOptions) {
			var name = requestOptions.req.params[0].split('/')[3];
			console.log(requestOptions.req.params)

			if (name === 'Mark') {
				requestOptions.res.statusCode = 500;
				requestOptions.res.end('Fuckoff Mark');
				return null;
			}

			return 'error';
		}
	},
});
