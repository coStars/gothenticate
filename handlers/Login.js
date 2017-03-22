const user = require('../database/UserHelpers.js');
const dbutils = require('../database/db.utils.js');

function login(req, res) {
    user.getUserByPassword(req.payload.email, req.payload.password, (err, result) => {
        if (result.length == 0) {
            req.view('login')
        } else {
            var session = {
                valid: true, // this will be set to false when the person logs out
                id: aguid(), // a random session id
                exp: new Date().getTime() + 30 * 60 * 1000 // expires in 30 minutes time
            };
            const data = {
                id: session.id,
                value: JSON.stringify(session)
            }
            dbutils.insert(client, 'session', data, (err, result) => {
                var token = JWT.sign(session, process.env.JWT_SECRET); // synchronous
                console.log("token", token);
                reply({
                        text: 'Check Browser Cookie or Auth Header for your Token (JWT)'
                    })
                    .header("Authorization", token)
                    .state("token", token, cookie_options)

                    });
        }
    })
}

module.exports = {
    login: login
}
