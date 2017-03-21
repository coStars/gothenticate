const user = require('../database/UserHelper.js')
function signUp(req, res) {
  const email = req.payload.email;
  user.getUserByEmail(email,(err,result)=>{
    if(result.length == 0){
      user.createUser(req.payload,cb)
      req.view('profile');

    }else{
    req.view('login');

    }
  })
    }
module.exports = {
signUp : signUp

}
