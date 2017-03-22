
const client = require ('../database/config.js');
const db = require('../database/db.utils.js');

db.createTable(client, function(errTable, resTable) {

  if(errTable) {
    console.log('error while trying to create tables');
    console.log('errTable',errTable);
    // throw errTable;
  }

  console.log('OK: TABLE CREATED');
client.pool.end();
});
