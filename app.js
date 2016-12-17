'use strict';

const Hapi = require('hapi');
const Good = require('good');

require('./config/config')["dotEnv"];

const server = new Hapi.Server();
server.connection({ 
    port: process.env.PORT || 3000 
});

const routes = require('./routes');
server.routes(routes);

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});