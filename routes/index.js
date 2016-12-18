module.exports = users => {
    return [
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => {
                reply.view('index', users);
            }
        }
    ];
};