
const table = require('./sql.js');
function createTable(client,cb ) {
  const tables = `${table.users} ${table.sessions}`
client.query(tables,cb);

  /*
query sentence to insert into table
cb the error
  */
}
function insert(query,cb) {
  /*
query sentence to insert into table
cb the error
  */

}
function select(query,cb) {
  /*
  guery sentence to seclect from table
  cb : return the information back from table
  */

}
function update(query,cb) {
  /*
query sentence to insert into table
cb the error
  */
}

module.exports ={
  createTable : createTable,
  insert : insert,
  select : select,
  update : update
}
