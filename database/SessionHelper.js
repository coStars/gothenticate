function getSessionById(id,cb){
/* select the sesion from the database by the User Id
and will return the Session*/
}


function addSession(data,cb) {
/*
Add Session to the database

the data type Object

Object {
id String,
value type object
{id number ,
  expired date,
valid }
}
*/
}

module.exports = {
  getSessionById : getSessionById,
  addSession : addSession
}
