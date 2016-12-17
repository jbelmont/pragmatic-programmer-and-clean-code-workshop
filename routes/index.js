module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    },
    {
        method: 'GET',
        path: '/{name}',
        handler: function (request, reply) {
            reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
        }
    }
];