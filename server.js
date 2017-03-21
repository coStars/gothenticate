const hapi = require('hapi');
const router = require('../routes/router.js');

const server = new hapi.Server();
require ('env2')('.env');
server.connection({
  port:process.env.PORT||3000
});
server.route(router)
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
