const profile = require('../handlers/Profile.js')
const profileGET = {
    method: "GET",
    path: "/profile",
    handler: profile.profile
  }

module.exports = {
    profileGET: profileGET
}
