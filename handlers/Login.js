const user = require('../database/UserHelpers.js');
const dbutils = require('../database/db.utils.js');
const client = require('../database/config.js');
const aguid = require('aguid');
const hapiAuthJWT = require('hapi-auth-jwt2'); // http://git.io/vT5dZ
const assert = require('assert');
const JWT = require('jsonwebtoken'); // used to sign our content
const Bcrypt = require('bcrypt');
const Boom = require('boom') //

var cookie_options = {
    ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
    encoding: 'none', // we already used JWT to encode
    isSecure: false, // warm & fuzzy feelings
    isHttpOnly: true, // prevent client alteration
    clearInvalid: false, // remove invalid cookies
    strictHeader: true, // don't allow violations of RFC 6265
    path: '/' // set the cookie for all routes
}

function loginPOST(req, reply) {
    const dta = {
        email: req.payload.email,
        password: req.payload.password
    }
    user.getUserByEmail(client, dta.email, (err, result) => {
        if (result.length == 0) {
            reply(
                Boom.unauthorized('The email is not correct')
            )
        } else {
            Bcrypt.compare(dta.password, result[0].password, (err, isValid) => {
                if (!err && isValid) {
                    var session = {
                        valid: true,
                        id: aguid(),
                        exp: new Date().getTime() + 30 * 60 * 1000,
                        userId: result[0].id,
                    };
                    const data = {
                        id: session.id,
                        value: JSON.stringify(session)
                    }
                    dbutils.insert(client, 'session', data, (err, result) => {
                        var token = JWT.sign(session, process.env.JWT_SECRET); // synchronous
                        reply({
                                text: "Login successfuly"
                            })
                            .header("Authorization", token)
                            .state("token", token, cookie_options)
                            .code(200)
                    });
                } else {
                    reply(Boom.notFound('The password is not correct'));
                }
            });
        }
    });
}

function loginGET(req, reply) {
    reply.file("./handlers/login.html");
}
module.exports = {
    loginGET: loginGET,
    loginPOST: loginPOST

}
