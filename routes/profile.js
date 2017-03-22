const user = require('../handlers/Profile.js')
const userGET = {
    method: "GET",
    path: "/user",
    handler: user.profile
  }
module.exports = {
    userGET: userGET
}
