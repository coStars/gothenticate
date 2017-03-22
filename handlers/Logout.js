function logout(request, reply) {
    const dbutils = require('../database/db.utils.js');
    var session;
    dbutils.SelectSession(request.auth.credentials.id, function(rediserror, redisreply) {
        session = redisreply;
        session = JSON.parse(session[0].value);
        session.valid = false;
        session.ended = new Date().getTime();
        const data = {
            id: session.id,
            value: JSON.stringify(session)
        }
        dbutils.insert(client, 'session', data, function(err,result){

          return reply({
                  text: 'You have been logged out'
              })
              .unstate('token', cookie_options)
              .code(302)
        });

    })
}
}
module.exports = {
    logout: logout

}
