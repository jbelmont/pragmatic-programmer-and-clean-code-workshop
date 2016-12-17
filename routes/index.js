module.exports = users => {
    return [
        {
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply(users);
            }
        }
    ];
};