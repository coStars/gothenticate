const pg = require('pg');
const config = {
    password: '123654',
    user: 'postgres',
    database: 'gothenticate',
    port: 5432
}
 function connecToDatabase(config, cb) {
    var client = new pg.Client(config);
    client.connect((errConn) => {
        if (errConn) {
            cb(errConn, undefiend)
        }
    });
    return client;
}
module.exports = {
    client: connecToDatabase(config,(errConn)=>{
      
    })
}
