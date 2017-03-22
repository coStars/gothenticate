const joi = require('joi');
const signupValidation = {
    username: joi.string().required(),
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
