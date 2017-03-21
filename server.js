const hapi = require('hapi');

const server = new hapi.Server();
require ('env2')('.env');
server.connection({
  port:process.env.PORT||3000
});
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
