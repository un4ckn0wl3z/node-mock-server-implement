
module.exports = {

    '/rest/hello/#{name}/GET': function (serverOptions, requestOptions) {
        var name = requestOptions.req.params[0].split('/')[3];
        console.log(requestOptions.req.params)

        if (name === 'anuwat') {
            requestOptions.res.statusCode = 200;
            requestOptions.res.end('Hi Boss');
            return null;
        }

        return 'success';
    }

};
