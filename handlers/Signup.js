const user = require('../database/UserHelpers.js')

function signUp(req, res) {
    const email = req.payload.email;
    user.getUserByEmail(email, (err, result) => {
        if (result.length == 0) {
            user.createUser(req.payload, cb)
            req.view('profile');
        } else {

          reply({text:"email is exist "})
        }
    })
}
module.exports = {
    signUp: signUp

}
