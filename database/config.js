const pg = require('pg');
const config = {
    local: {
        user: 'postgres',
        password: '482106',
        database: 'gothenticate',
        port: 5432
    },
    test: {
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT

    }
}


const pool = new pg.Pool(config.local);
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
