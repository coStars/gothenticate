  const test = require('tape');
  const dbutils = require('../database/db.utils.js');
  const connect = require('../database/config.js');
  test('Create table ', (t) => {
    const client = connect.client;
      dbutils.createTable(client, (errConn) => {
          t.notOk(errConn, "create table correctly");
          t.end()

      })

  })
  test('insert to table ', (t) => {
    const client = connect.client;
      dbutils.insert(client, (errInsert) => {
          t.notOk(errInsert, "insert into table correctly");
          t.end()

      })

  })
  test('select from table ', (t) => {
    const client = connect.client;
      dbutils.select(client, (errSelect,result) => {
        console.log("RESULT",result);
          t.notOk(errSelect, "select data correctly");
          t.end()

      })

  })
  test('update data ', (t) => {
    const client = connect.client;
      dbutils.update(client, (errUpdate) => {
          t.notOk(errUpdate, "update data correctly");


      })
      t.end()
      client.end();

  })
