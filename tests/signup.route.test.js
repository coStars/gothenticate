const test = require('tape');
const shot = require('shot');
const server = require('../server.js');
const client = require('../database/config.js');
const userHelpers = require('./../database/UserHelpers.js');
const generateUserPayload = (data) => {
  return Object.assign({
    username: 'user' + Math.floor(Math.random() * 100000),
    email: 'email' + Math.floor(Math.random() * 100000) + '@gmail.com',
    password: 'pass' + Math.floor(Math.random() * 100000),
  }, data);
}
test('GET /signup : should dispaly sigun up page', (t) => {
    const option = {
        method: 'GET',
        url: '/signup'
    };
    server.inject(option, (response) => {
        const check = JSON.parse(response.payload);
        t.deepEqual(check.text, 'should display signup page', 'get signup page correctly');
        t.equal(response.statusCode, 200, 'get status code correctly');
        t.end();
    })
})
test('POST/signup : signup with INVALID username', (t) => {
    const option = {
        method: 'POST',
        url: '/signup',
        payload: generateUserPayload({user:'*244d'}),
    };
    server.inject(option, (response) => {
        t.equal(response.statusCode, 400, 'Bad request |username with value 8alaa fails to match the required pattern');
        t.end();
    })
})
test('POST/signup : signup with INVALID email', (t) => {
    const option = {
        method: 'POST',
        url: '/signup',
        payload: generateUserPayload({email:'hello'}),
    };
    server.inject(option, (response) => {
        t.equal(response.statusCode, 400, 'Bad request | email must be valid');
        t.end();
    })
})
test('POST/signup : signup with INVALID password', (t) => {
    const option = {
        method: 'POST',
        url: '/signup',
        payload: generateUserPayload({password:'12'}),
    };
    server.inject(option, (response) => {
        t.equal(response.statusCode, 400, 'Bad request | length must be at least 6 characters long');
        t.end();
    })
})
test('POST/signup : signup with VALID email,username and password', (t) => {
  const data = generateUserPayload();
    const option = {
        method: 'POST',
        url: '/signup',
        payload: data
    };
    server.inject(option, (response) => {
        const check = JSON.parse(response.payload);
        t.deepEqual(check.text, 'Account Created successfully', 'add user acount correctly');
        t.equal(response.statusCode, 200, 'get statusCode correctly');
        t.end();
    });
})
test('POST/signup : signup with  email that already exist', (t) => {
    const data = generateUserPayload();
    userHelpers.createUser(client, data, (err) => {
      if (err) {
        t.fail('Could not create user');
        t.end();
      }
      const newData = generateUserPayload({email: data.email});
      const option = {
        method: 'POST',
        url: '/signup',
        payload: newData
      };
      server.inject(option, (response) => {
        const check = JSON.parse(response.payload);
        t.deepEqual(check.text, 'email is exist', 'email is already exist');
        t.equal(response.statusCode, 200, 'get statusCode correctly');
        t.end();
      })
    });

})

test('POST/signup : signup with  username that already exist', (t) => {
  const data = generateUserPayload();
  userHelpers.createUser(client, data, (err) => {
    if (err) {
      t.fail('Could not create user');
      t.end();
    }
    const newData = generateUserPayload({username: data.username});
    const option = {
        method: 'POST',
        url: '/signup',
        payload: newData
        //'username=alaaAhmed&email=alaa@hotmail.com&password=123654789'
    };
    server.inject(option, (response) => {
        const check = JSON.parse(response.payload);
        t.deepEqual(check.text, 'UserName is exist', 'username is already exist');
        t.equal(response.statusCode, 200, 'get statusCode correctly');
        t.end();
        console.log('******************* Test signup route successfully ***************');
    })

})
})
