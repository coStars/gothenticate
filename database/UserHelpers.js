function getUserByEmail(email, cb) {
    cb()
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
module.exports = {
  getUserByEmail : getUserByEmail,
  updateUserInfo : updateUserInfo,
  createUser : createUser
}
