
const studentModel = require("../model/student");

//const {validationResult} = require("express-validator")

getAllStudents = (req,res,next)=>{
    studentModel.find().then((result)=>{
       return res.status(200).json(result)
    }).catch((error)=>{
   
        next(error);
    })
};


getStudent =(req,res,next)=>{
    studentModel.findById({_id:req.params.id})
    .then((result)=>{
        // check if id not found in mongodb => return null 
        if(result === null) next(new Error ("id not found"));   
        return res.status(200).json(result);
    }).catch((error)=>{
       next(error);
    })
    
}

createStudent = (req,res,next)=>{
    const object = new studentModel({...req.body});
    object.save().then((result)=>{
        return res.status(201).json(result);
    })
   };

editStudent =(req,res,next)=>{
    studentModel.updateOne({_id:req.params.id},
        {
     $set : {
         firstName:req.body.firstName,
         lastName: req.body.lastName,
         email :req.body.email,
         password :req.body.password
     }
    }).then((data)=>{
         // check if student id want to edit it found or not 
        if(data.nModified == 0){
            next(new Error("student id not found"))
        }else{
              return res.status(200).json({data:"updated successful"})
        }
   
     
    }).catch((error)=>{
     next(error);
    })
 };

 deleteStudent = (req,res,next)=>{
    studentModel.deleteOne({_id:req.params.id})
    .then((result)=>{
        // check if student id want to delete it found or not 
        if(result.deletedCount === 0){
             next(new Error ("student id not found"));
        }else{
            return res.status(200).json("student delete successful");
        }   
        
    
    }).catch(()=>{
        next(error);
    })
}


module.exports ={getAllStudents,getStudent,createStudent,editStudent,deleteStudent}