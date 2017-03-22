const test = require('tape');
const dbutils = require('../database/db.utils.js');
const client = require('../database/config.js')
test('Create table ', (t) => {
    dbutils.createTable(client.pool, (errConn) => {
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
    dbutils.insert(client.pool, 'users', data, (errInsert) => {
        t.notOk(errInsert, "insert into table correctly");
        t.end()
    })



})
test('select all from users table for an email that already exists ', (t) => {
    dbutils.select(client.pool, 'users',`username='alaa'`, (errSelect, result) => {
        t.equal(result.length > 0, true, 'get the data correctly')
        t.notOk(errSelect, "select data correctly");
        t.end()
    })
})
test('select all from users table for an email that NOT exists ', (t) => {
    dbutils.select(client.pool, 'users',`email='alaa@alaa.com'`, (errSelect, result) => {
        t.equal(result.length == 0, true, 'there is no data ')
        t.notOk(errSelect, "select data correctly");
        t.end()
    })
})
test('update data ', (t) => {
  const data = {
    username : 'newName'
  }
    dbutils.update(client.pool,'users',data,`username='alaa'`, (errUpdate) => {
        t.notOk(errUpdate, "update data correctly");
    })
    t.end()
    client.pool.end();
})
