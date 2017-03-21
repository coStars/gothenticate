const user = require('../database/UserHelper.js');


function login(req, res) {
  user.getUserByPassword(req.payload.email,req.payload.password,(err,result)=>{
    if(result.length == 0){
      //alert email or password is not correct and
      req.view('login')

    }else{
    req.view('login')

    }

  })
    }
module.exports = {
login : login

}
