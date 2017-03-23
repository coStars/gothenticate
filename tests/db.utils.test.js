const test = require('tape');
const dbutils = require('../database/db.utils.js');
const client = require('../database/config.js')
test('Create table ', (t) => {
    dbutils.createTable(client, (errConn) => {
        t.notOk(errConn, "create table correctly");
        t.end()
    })
})
test('insert to users table', (t) => {
    const data = {
        username: 'fake',
        email: 'fake@fake.com',
        password: '123654'

    }
    dbutils.insert(client, 'users', data, (errInsert) => {
        t.notOk(errInsert, "insert into table correctly");
        t.end()
    })



})
test('select all from users table for an email that already exists ', (t) => {
    dbutils.select(client, 'users',`email='fake@fake.com'`, (errSelect, result) => {
        t.equal(result.length > 0, true, 'get the data correctly')
        t.notOk(errSelect, "select data correctly");
        t.end()
    })
})
test('select all from users table for an email that NOT exists ', (t) => {
    dbutils.select(client, 'users',`email='fake1@fake1.com'`, (errSelect, result) => {
        t.equal(result.length == 0, true, 'there is no data ')
        t.notOk(errSelect, "select data correctly");
        t.end()
    })
    //client.pool.end();
    console.log('******************* Test database successfully ***************');
})
// test('update data ', (t) => {
//   const data = {
//     username : 'newName'
//   }
//   //  "UPDATE  users SET username = 'newalaaa' WHERE username = 'alaa' ;"
//   //`  UPDATE  ${table} SET ${d} WHERE ${condition};`
//     dbutils.update(client,`users`,`username = 'newalaaa'`,`username='alaa'`, (errUpdate) => {
//         t.notOk(errUpdate, "update data correctly");
//     })
//     t.end()
//     client.pool.end();
// })
