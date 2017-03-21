
const table = require('./sql.js');
function createTable(client,cb ) {
  const tables = `${table.users} ${table.sessions}`
client.query(tables,cb);

  /*
query sentence to insert into table
cb the error
  */
}
function insert(client,cb) {
  client.query(table.addUser,cb);
  /*
query sentence to insert into table
cb the error
  */

}
function select(client,cb) {
  client.query(table.getUser,(errSelect, result)=>{
    if(errSelect){
      console.log("errSelect",errSelect);
    }
    cb(undefined,result.rows);
  });
  /*
  guery sentence to seclect from table
  cb : return the information back from table
  */

}
function update(client,cb) {
  client.query(table.updateUser,cb)
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
