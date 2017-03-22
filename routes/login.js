const login = require('../handlers/Login.js');
const validation = require('../handlers/Validation.js');
const loginGET = {
    method: "GET",
    path: "/",
    handler: login.loginGET,
    config: {
        auth: false
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
        auth:false
    }

}
module.exports = {
    loginPOST: loginPOST,
    loginGET: loginGET
}
