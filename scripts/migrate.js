const config = {
    password: '123654',
    user: 'postgres',
    database: 'gothenticate',
    port: 5432
}
var client = require('../database/config.js')(config);
var db = require('../database/db.utils.js');
db.createTable(client, function(errTable, resTable) {

  if(errTable) {
    console.log('error while trying to create tables');
    console.log('errTable',errTable);
    // throw errTable;
  }

  console.log('OK: TABLE CREATED');
  client.end()

});
