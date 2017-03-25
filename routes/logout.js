const logOut = require('../handlers/Logout.js');
const logout = {
    method: "POST",
    path: "/logout",
    handler: logOut.logout,
    config : {
        auth : 'jwt'
    }
}

module.exports = {
    logout: logout

}
