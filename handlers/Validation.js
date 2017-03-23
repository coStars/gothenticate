const joi = require('joi');
const signupValidation = {
    username: joi.string().regex(/^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/).required(),
    email: joi.string().email().required(),
    password:  joi.string().min(6).max(20).required()
}
const loginValidation = {
    email: joi.string().email().required(),
    password:  joi.string().min(6).max(20).required()
}
module.exports = {
    signupValidation: signupValidation,
    loginValidation: loginValidation
}
