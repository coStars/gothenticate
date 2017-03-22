const client = require('./config.js');
const dbutils = require('./db.utils.js');
var validate = function(decoded, request, callback) {
    dbutils.SelectSession(client,decoded.id, function(rediserror, reply) {
        var session;
        if (reply) {
            session = reply;
        } else {
            return callback(rediserror, false);
        }
        session = JSON.parse(session[0].value);
        if (session.valid === true) {
            // console.log('I\'m here');
            return callback(rediserror, true);
        } else {
            return callback(rediserror, false);
        }
    });
};
module.exports = {
    validate:validate
}
