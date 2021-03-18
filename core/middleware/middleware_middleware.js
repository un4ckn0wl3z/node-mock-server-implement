
module.exports = {

    '/rest/middleware/#{name}/GET': function (serverOptions, requestOptions) {
        var name = requestOptions.req.params[0].split('/')[3];
        console.log(requestOptions.req.params)

        if (name === 'Mark') {
            requestOptions.res.statusCode = 500;
            requestOptions.res.end('Fuckoff Mark');
            return null;
        }

        return 'error';
    }

};
