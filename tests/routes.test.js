const test = require('tape');
const shot = require('shot');
const server = require('../server.js');
test('GET / : return login page ',(t)=>{
  const option = {
    method : 'GET',
    url : '/'
  }
server.inject(option,(response=>{
    const check = (JSON.parse(response.payload));
  t.equal(check.text,'HELLLLO','success test')
  t.equal(response.statusCode,200,'success test')
}))
t.end();

})
