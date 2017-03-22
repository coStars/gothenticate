const signUp = require('../handlers/Signup.js')
const validation = require('../handlers/Validation');
const signupGET = {
    method: "GET",
    path: "/signup",
    handler: (req, res) => {}
};

const signupPOST = {
    method: "POST",
    path: "/signup",
    handler: signUp.signUp,
    config: {
        validate: {
            payload: validation.signupValidation
        },
        auth: false
    }

};

module.exports = {
    signupGET: signupGET,
    signupPOST: signupPOST
}
