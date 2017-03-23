const pg = require('pg');
const config = {
    local: {
        user: 'postgres',
        password: '123654',
        database: 'gothenticate',
        port: 5432
    },
    test : {
      user: 'postgres',
      password: '123654',
      database: 'tests',
      port: 5432

    },
    heruko : {
        user: 'nbhpfiwtyuydzt',
        password: '3bd46e062cc0580ba7f93f7f34ce47fe015b35a053396363f7fdbbc07eafcad8',
        database: 'd4vhvraq77d00t',
        host : 'ec2-54-235-123-159.compute-1.amazonaws.com',
        port: 5432
      }
}
const pool = new pg.Pool(config.heruko);
const query = (text, cb) => pool.connect((err, client, done) => {
    if (err) {
        throw (err);
    }
    client.query(text, (err, result) => {
        done();
        cb(err, result);
    })
})
const client = {
    query: query,
    pool:pool,
}

module.exports = client;
