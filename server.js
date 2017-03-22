const hapi = require('hapi');
const router = require('./routes/router.js');
const SessionHelper = require('./database/SessionHelper.js');
const hapiAuthJWT = require('hapi-auth-jwt2'); // http://git.io/vT5dZ
const assert = require('assert');
const JWT = require('jsonwebtoken'); // used to sign our content
const inert = require('inert');
require('env2')('.env');
const server = new hapi.Server();
server.connection({
    port: process.env.PORT || 3000
});
server.register([hapiAuthJWT,inert], (err) => {
    assert(!err); // halt if error
    // see: http://hapijs.com/api#serverauthschemename-scheme
    server.auth.strategy('jwt', 'jwt', true, {
        key: process.env.JWT_SECRET,
        validateFunc: SessionHelper.validate,
        verifyOptions: {
            ignoreExpiration: true,
            algorithms: ['HS256']
        }
    })
    server.route(router);

});
module.exports = server;
