const client = require('./config.js');
const dbUtils = require('./db.utils.js');

function getUserByEmail(email, cb) {
    dbUtils.select(client.client, 'users', `email='${email}'`, cb)
}

function createUser(data, cb) {
    /*
  data type Object
  Object {
  username type String ,
  password type String ,
  email    type String ,
  bio      type String
}
    */
    cb()
}

function updateUserInfo(data, cb) {
    /*
     data type object
     Object {
     data type Object
     Object {
     username type String ,
     password type String ,
     email    type String ,
     bio      type String
      }
      data.map (val){
      update database set val new val
    }
    */
}
function getUserByPassword(email,password, cb) {
    dbUtils.select(client, 'users', `email='${email}' AND password='${password}'`, cb)
}

module.exports = {
  getUserByEmail : getUserByEmail,
  updateUserInfo : updateUserInfo,
  createUser : createUser,
  getUserByPassword : getUserByPassword
}
