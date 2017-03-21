  const test = require('tape');
  const dbutils = require('../database/db.utils.js');
  const connect = require('../database/config.js');
  test('Create table ', (t) => {
    const client = connect.client;
      dbutils.createTable(client, (errConn) => {
          t.notOk(errConn, "create table correctly");
          t.end()
          client.end();
      })

  })
