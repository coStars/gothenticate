const user = require('../database/UserHelpers.js');


function login(req, reply) {

    return reply({text : "Hello"})
    user.getUserByPassword(req.payload.email, req.payload.password, (err, result) => {
        if (result.length == 0) {
            //alert email or password is not correct and
            reply("")
        } else {
            reply("")
        }
    })
}
module.exports = {
    login: login

}
