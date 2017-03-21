const users = "CREATE TABLE IF NOT EXISTS users (id serial ,username text,email text, password text, bio text)";
const sessions = "CREATE TABLE IF NOT EXISTS session (id uuid ,value text)";

module.exports = {
  users : users,
  sessions : sessions
}
