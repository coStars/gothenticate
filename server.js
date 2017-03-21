const hapi = require('hapi');
const server = new hapi.Server();
require ('env2')('env');
server.connection({
  port:proccess.env.PORT
});
