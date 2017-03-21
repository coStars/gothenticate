  const test = require('tape');
  const dbutils = require('../database/db.utils.js');
  const client = require('../database/config.js');
  test('Create table ', (t) => {
      dbutils.createTable(client, (errConn) => {
          t.notOk(errConn, "create table correctly");
          t.end()

      })

  })
  test('insert to table ', (t) => {
      dbutils.insert(client, (errInsert) => {
          t.notOk(errInsert, "insert into table correctly");
          t.end()

      })

  })
  test('select from table ', (t) => {
      dbutils.select(client, (errSelect,result) => {
        console.log("RESULT",result);
          t.notOk(errSelect, "select data correctly");
          t.end()

      })

  })
  test('update data ', (t) => {
      dbutils.update(client, (errUpdate) => {
          t.notOk(errUpdate, "update data correctly");


      })
      t.end()
      client.end();

  })
