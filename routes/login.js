const login = require('../handlers/Login.js');
const validation = require('../handlers/Validation');
const loginGET = {
    method: "GET",
    path: "/login",
    handler: login.login
};

const loginPOST = {
    method: "POST",
    path: "/login",
    handler: login.login,
    config :{
      validate : {
        payload : validation.loginValidation
      }
    }
  }

module.exports = {
    loginPOST: loginPOST,
    loginGET: loginGET
}
