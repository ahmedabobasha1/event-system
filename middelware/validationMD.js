
const {validationResult} =require("express-validator");

module.exports = (request,response,next)=>{
let result  = validationResult(request);
//console.log(result);

    if(!result.isEmpty()){
      let message = result.errors.reduce((current,error)=>current +error.msg+" ","");
     // console.log(message);
      let error = new Error(message);
      error.status= 422;
      throw error;
    }
    next();
}
