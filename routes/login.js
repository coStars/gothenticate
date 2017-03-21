const login = require('../handlers/Login.js');
const validation = require('../handlers/Validation');
const loginGET = {
    method: "",
    path: "/login",
    handler: (req, res) => {}
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
