const user = require('../database/UserHelpers.js');
const dbutils = require('../database/db.utils.js');
const client = require('../database/config.js');
const aguid = require('aguid');

function loginPOST(req, res) {
    const data = {
        email: req.payload.email,
        password: req.payload.password
    }
    user.getUserByPassword(client,data.email,data.password, (err, result) => {
        console.log("here");
        if (res.length == 0) {
            reply({
                text: "The Email or the Password are incorect"
            })
        } else {
            var session = {
                valid: true,
                id: aguid(),
                exp: new Date().getTime() + 30 * 60 * 1000
            };
            const data = {
                id: session.id,
                value: JSON.stringify(session)
            }
            dbutils.insert(client, 'session', data, (err, result) => {
                var token = JWT.sign(session, process.env.JWT_SECRET); // synchronous
                console.log("token", token);
                reply({
                        text: "Login successful"
                    })
                    .header("Authorization", token)
                    .state("token", token, cookie_options)
                    .code(302)

            });
        }
    })
}

function loginGET(req, reply) {
    //


    reply({
        text: "HELLLLO"
    })

}

module.exports = {
    loginGET: loginGET,
    loginPOST: loginPOST

}
