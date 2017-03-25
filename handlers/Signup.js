const user = require('../database/UserHelpers.js')
const client = require('../database/config.js');
const hash = require('../database/hash.js');
const Boom = require('boom')

function signupPOST(req, reply) {
    const email = req.payload.email;
    const username = req.payload.username;
    user.getUserByUsername(client, username, (err, result) => {
        if (result.length > 0) {
            reply(Boom.conflict('This username has already been used'))
        } else {
            user.getUserByEmail(client, email, (err, result) => {
                if (result.length > 0) {
                    reply(Boom.conflict('This email is already registered'))
                } else {
                    hash(req.payload.password, function(err, hash) {
                        if (err) {
                            return console.error(err);
                        }
                        req.payload.password = hash;
                        user.createUser(client, req.payload, (err, result) => {})
                    });
                    reply({

                        text: "Account Created successfully"

                    })
                }
            })
        }
    })
}

function signupGET(req, reply) {
    reply({
        text: 'should display signup page'
    });
}
module.exports = {
    signupPOST: signupPOST,
    signupGET: signupGET

}
