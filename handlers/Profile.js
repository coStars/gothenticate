const jwt = require('jsonwebtoken');
const client = require('./../database/config.js');
const userHelpers = require('./../database/UserHelpers.js');

function profile(req, reply) {
  const decoded = jwt.decode(req.state.token, process.env.JWT_SECRET);
  const userId = decoded.userId;
  userHelpers.getUserById(client, userId, (err, result) => {
    if (err) {
      return reply({ message: "Error get user by id."}).code(500);
    }
    if (!result[0]) {
      return reply({ message: "No user with this id."}).code(400)
    }
    reply(result[0]);
  })
}
module.exports = {
profile : profile

}
