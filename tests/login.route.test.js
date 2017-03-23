const test = require('tape');
const shot = require('shot');
const server = require('../server.js');
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
    const option = {
        method: 'POST',
        url: '/login',
        payload: 'email=alaa&password=123654'
    }
    server.inject(option, (response) => {
        t.equal(response.statusCode, 400, 'Bad request | email must be valid')
        t.end()
    })
})
test('POST /login : login with INVALID password (short password)', (t) => {
    const option = {
        method: 'POST',
        url: '/login',
        payload: 'email=alaa@hotmail.com&password=12'
    }
    server.inject(option, (response) => {
        t.equal(response.statusCode, 400, 'Bad request | length must be at least 6 characters long')
    })
      console.log('******************* Test login route successfully ***************');
    server.stop(t.end());
})
// test('POST /login : login with VALID email and password BUT email is NOT correct', (t) => {
//     const data = {
//         email: 'alaa@hotmail.com',
//         password: '1236549'
//     }
//     const option = {
//         method: 'POST',
//         url: '/login',
//         payload: data
//     }
//     server.inject(option, (response) => {
//         const check = JSON.parse(response.payload);
//         t.deepEqual(check.text, 'The Email or the Password are incorrect', 'the alert message is match');
//         t.equal(response.statusCode, 200, 'get status code correctly')
//     })
//     server.stop(t.end());
// })
