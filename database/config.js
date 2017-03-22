const pg = require('pg');
const config = {
    password: '123654',
    user: 'postgres',
    database: 'gothenticate',
    port: 5432
}

module.exports = function (config) {
    var client = new pg.Client(config);
    client.connect((errConn) => {
        if (errConn) {
            throw errConn;
        }
    });
    console.log("client in config",client);
    return client;
}
