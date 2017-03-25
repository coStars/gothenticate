
const dbUtils = require('./db.utils.js');

function getUserByEmail(client, email, cb) {
    dbUtils.select(client, 'users', `email='${email}'`, cb)
}

function getUserById(client, id, cb) {
    dbUtils.select(client, 'users', `id='${id}'`, cb)
}

function getUserByUsername(client,username, cb) {
    dbUtils.select(client, 'users', `username='${username}'`, cb)
}
function createUser(client,data, cb) {
    dbUtils.insert(client, 'users', data, cb);
}

function getUserByPassword(client,email,password, cb) {
    dbUtils.select(client, 'users', `email='${email}' AND password='${password}' `, cb)
}
// function updateUserInfo(client,data, cb) {
//
// dbUtils.update(client,'users', data, 'id=', cb);
// }
module.exports = {
    getUserByEmail: getUserByEmail,
  //  updateUserInfo: updateUserInfo,
    createUser: createUser,
    getUserByPassword:getUserByPassword,
    getUserByUsername:getUserByUsername,
    getUserById:getUserById
}
