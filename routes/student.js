const express = require("express");
const router = express.Router();

const studentModel = require("../model/student");

router.get('/',(req,res)=>{
     studentModel.find().then((result)=>{
        return res.status(200).json(result)
     }).catch((err)=>{
        res.status(500).json({Error:err})
     })
});

router.get('/:id',(req,res)=>{
    studentModel.findById({_id:req.params.id}).then((result)=>{
        return res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json({Error:err})
    })
})

router.post('/',(req,res)=>{
    const student = new studentModel({...req.body});
    student.save().then((result)=>{
        return res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({Error:err})
    })
});

router.put('/:id',(req,res)=>{
   studentModel.updateOne({_id:req.params.id},{
    $set : {
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        email :req.body.email,
        password :req.body.password
    }
   }).then(()=>{
    return res.status(200).json("update successful")
   }).catch((err)=>{
    return res.status(500).json({Error:err})
   })
});

router.delete('/:id',(req,res)=>{
    studentModel.deleteOne({_id:req.params.id}).then(()=>{
        return res.status(200).json("delete successful") 
    }).catch(()=>{
        return res.status(500).json({Error:err})
    })
});


module.exports = router;