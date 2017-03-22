const config = {
    password: '123654',
    user: 'postgres',
    database: 'test',
    port: 5432
}
const test = require('tape');
const dbutils = require('../database/db.utils.js');
const client = require('../database/config.js')(config);
test('Create table ', (t) => {
    dbutils.createTable(client, (errConn) => {
        t.notOk(errConn, "create table correctly");
        t.end()
    })
})
test('insert to users table', (t) => {
    const data = {
        username: 'alaa',
        email: 'test@test.com',
        password: '123654'

    }
    dbutils.insert(client, 'users', data, (errInsert) => {
        t.notOk(errInsert, "insert into table correctly");
        t.end()
          client.end();
    })
})
// test('select from table ', (t) => {
//     dbutils.select(client, (errSelect,result) => {
//       console.log("RESULT",result);
//         t.notOk(errSelect, "select data correctly");
//         t.end()
//
//     })
//
// })
// test('update data ', (t) => {
//     dbutils.update(client, (errUpdate) => {
//         t.notOk(errUpdate, "update data correctly");
//
//
//     })
//     t.end()
//     client.end();
//
// })
