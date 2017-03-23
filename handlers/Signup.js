const user = require('../database/UserHelpers.js')
const client = require('../database/config.js');
const hash = require('../database/hash.js');

function signUp(req, reply) {
    const email = req.payload.email;
    const username = req.payload.username;
    user.getUserByUsername(client, username, (err, result) => {
        if (result.length > 0) {
            reply({
                text: "UserName is exist"
            }).code(200)

        } else {
            user.getUserByEmail(client, email, (err, result) => {
                if (result.length == 0) {

                    hash(req.payload.password, function(err, hash) {
                        if (err) {
                            console.log(err);
                            return console.error(err);
                        }
                        req.payload.password = hash;
                        user.createUser(client, req.payload, (err, result) => {})
                    });
                    reply({
                        text: "Account Created successfully "
                    }).code(200)

                } else {

                    reply({
                        text: "email is exist "
                    })
                }
            })
        }
    })
}
module.exports = {
    signUp: signUp

}
