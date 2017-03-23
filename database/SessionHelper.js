const client = require('./config.js');
const dbutils = require('./db.utils.js');
var validate = function(decoded, request, callback) {
    dbutils.SelectSession(client,decoded.id, function(error, reply) {
        var session;
        if (reply) {
            session = reply;
        } else {
            return callback(error, false);
        }
        session = JSON.parse(session[0].value);
        if (session.valid === true) {
            // console.log('I\'m here');
            return callback(error, true);
        } else {
            return callback(error, false);
        }
    });
};
module.exports = {
    validate:validate
}
