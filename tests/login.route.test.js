const test = require('tape');
const shot = require('shot');
const server = require('../server.js');
const client = require('../database/config.js');
const userHelpers = require('./../database/UserHelpers.js');
const hash = require('./../database/hash.js');
const generateUserPayload = (data) => {
    return Object.assign({
        email: 'email' + Math.floor(Math.random() * 100000) + '@gmail.com',
        password: 'pass' + Math.floor(Math.random() * 100000),
    }, data);
}
test('GET / : return login page ', (t) => {
    const option = {
        method: 'GET',
        url: '/'
    }
    server.inject(option, (response) => {
        var validtion = response.payload.indexOf('form');
        t.notEqual(validtion, -1, "get 'form' some where");
        t.equal(response.statusCode, 200, 'get status code correctly');
        t.end();
    })
})


test('POST /login : login with INVALID email', (t) => {
    const data = generateUserPayload({
        email: 'email'
    })
    const option = {
        method: 'POST',
        url: '/login',
        payload: data
    }
    server.inject(option, (response) => {
        t.equal(response.statusCode, 400, 'Bad request | email must be valid')
        t.end()
    })
})
test('POST /login : login with INVALID password (short password)', (t) => {
    const data = generateUserPayload({
        password: '11'
    })
    const option = {
        method: 'POST',
        url: '/login',
        payload: data
    }
    server.inject(option, (response) => {
        t.equal(response.statusCode, 400, 'Bad request | length must be at least 6 characters long')
        t.end()
    })
});

test('POST /login : login with VALID email and password BUT email is NOT correct', (t) => {
    const pass = 'test123';
    const data = {
      username : 'test.Test',
      email : 'test@gmail.com',
      password : hash
    }
    hash(pass, (err, hash)=>{
      data.password = hash;
      userHelpers.createUser(client, data, (err)=>{
        if (err) {
          t.fail('Could not create user');
          t.end();
        }
        const newData = {
          email : 'try@gmail.com',
          password : pass
        }
        const option = {
            method: 'POST',
            url: '/login',
            payload: newData
        }
        server.inject(option, (response) => {
            const check = JSON.parse(response.payload);
            t.deepEqual(check.error, 'Unauthorized', ' error unauthorized');
            t.deepEqual(check.message, 'The email is not correct', 'email is not correct');
            t.equal(response.statusCode, 401, 'get status code correctly');
            t.end();
        })
      })
    })
});

test('POST /login : login with VALID email and password BUT the password is NOT correct', (t) => {
    const data = {
        email: 'test@gmail.com',// this email from previous example
        password: '159753'
    };
        const option = {
            method: 'POST',
            url: '/login',
            payload: data
        }
        server.inject(option, (response) => {
            const check = JSON.parse(response.payload);
            console.log("response.payload", response.payload);
            t.deepEqual(check.error, 'Not Found', ' error Not Found');
            t.deepEqual(check.message, 'The password is not correct', 'password is not correct');
            t.equal(response.statusCode, 404, 'get status code correctly');
            t.end();
        })
    });

test('POST /login : login with VALID AND CORRECT email and password ', (t) => {
    const data = {
        email: 'test@gmail.com', // this DATA from the previous example
        password: 'test123'
    };
        const option = {
            method: 'POST',
            url: '/login',
            payload: data
        }
        server.inject(option, (response) => {
            const check = JSON.parse(response.payload);
            t.deepEqual(check.text, 'Login successfuly', 'Login successfuly');
            t.equal(response.statusCode,200, 'get status code correctly')
        })
        console.log('******************* Test login route successfully ***************');
        server.stop(t.end());
    });
