const login = require('../routes/login.js');
const logout = require('../routes/logout.js');
const user = require('../routes/profile.js');
const signup = require('../routes/signup.js');
module.exports = [
    login.loginPOST,
    login.loginGET,
    logout.logout,
    user.userGET,
    signup.signupGET,
    signup.signupPOST
];
