function getSessionById(id, cb) {
    /* select the sesion from the database by the User Id
    and will return the Session*/
}


function addSession(data, cb) {
    /*
    Add Session to the database

    the data type Object

    Object {
    id String,
    value type object
    {id number ,
      expired date,
    valid }
    }
    */
}

var validate = function(decoded, request, callback) {
    handler.SelectSession(decoded.id, function(rediserror, reply) {
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
    getSessionById: getSessionById,
    addSession: addSession,
    validate:validate
}
