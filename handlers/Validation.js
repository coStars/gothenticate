const joi = require('joi');
const signupValidation =  {
username:joi.string().required(),
  email: joi.string().email().required(),
  password: joi.number().integer().required()
}
const loginValidation =  {
  email: joi.string().email().required(),
  password: joi.number().integer().required()
}
module.exports = {
  signupValidation : signupValidation,
  loginValidation : loginValidation
}
