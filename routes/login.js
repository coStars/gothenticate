const login = require('../handlers/Login.js');
const validation = require('../handlers/Validation');
const loginGET = {
    method: "GET",
    path: "/",
    handler: login.loginGET
};

const loginPOST = {
    method: "POST",
    path: "/login",
    handler: login.loginPOST,
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
