const signUp = require('../handlers/Signup.js')
const validation = require('../handlers/Validation');
const signupGET = {
    method: "GET",
    path: "/signup",
    handler: signUp.signupGET,
    config: {
        auth: false
    },
};

const signupPOST = {
    method: "POST",
    path: "/signup",
    handler: signUp.signupPOST,
    config: {
        validate: {
            payload: validation.signupValidation
        },
        auth: false
    }

};

module.exports = {
    signupPOST: signupPOST,
    signupGET : signupGET
}
