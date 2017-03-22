const login = require('../handlers/Login.js');
const validation = require('../handlers/Validation');
const loginGET = {
    method: "GET",
    path: "/",
    handler: login.loginGET,
    config: {
        auth: 'jwt'
    }

};

const loginPOST = {
    method: "POST",
    path: "/login",
    handler: login.loginPOST,
    config: {
        validate: {
            payload: validation.loginValidation
        },
        auth: false
    }

}
module.exports = {
    loginPOST: loginPOST,
    loginGET: loginGET
}
