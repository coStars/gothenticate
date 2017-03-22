const hapi = require('hapi');
const router = require('./routes/router.js');

const server = new hapi.Server();
require ('env2')('.env');
server.connection({
  port:process.env.PORT||3000
});
server.route(router);
module.exports = server;
