const login = require('../routes/login.js');
const logout = require('../routes/logout.js');
const profile = require('../routes/profile.js');
const signup = require('../routes/signup.js');
module.exports = [login.loginPOST,
    login.loginGET,
    logout.logout,
    profile.profileGET,
    signup.signupGET,
    signup.signupPOST
]
