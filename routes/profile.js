const user = require('../handlers/Profile.js')
const userGET = {
    method: "GET",
    path: "/user",
    handler: user.profile,
    config : {
      auth : 'jwt'
    }
  }
module.exports = {
    userGET: userGET
}
