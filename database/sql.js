const users = "CREATE TABLE IF NOT EXISTS users (id serial ,username text,email text, password text, bio text);";
const sessions = "CREATE TABLE IF NOT EXISTS session (id uuid ,value text);";
const addUser = "INSERT INTO users (username,email, password) VALUES ('alaa','alaa@alaa.com', '123654');"
const getUser = "SELECT * FROM users;";
const updateUser = "UPDATE  users SET username = 'newalaaa' WHERE username = 'alaa' ;"
module.exports = {
  users : users,
  sessions : sessions,
  addUser : addUser,
  getUser : getUser,
  updateUser : updateUser
}
