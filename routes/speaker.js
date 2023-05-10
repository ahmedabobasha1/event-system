const express = require("express");
const router = express.Router();

const SpeakerModel = require("../model/speaker")

router.get('/',(req,res)=>{
   
    SpeakerModel.find({}).then((result)=>{
        return res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({Error:err})
    })
});

router.get('/:id',(req,res)=>{
        SpeakerModel.findById({_id:req.params.id}).then((result)=>{
            return res.status(200).json(result)
        }).catch((err)=>{
            return res.status(500).json({Error:err})
        });
})

router.post('/',(req,res)=>{
    const speaker = new SpeakerModel({...req.body})
    speaker.save().then((result)=>{
        return res.status(201).json(result);
    }).catch((err)=>{
        return res.status(500).json({Error:err});
    })
});

router.put('/:id',(req,res)=>{
    SpeakerModel.updateOne({_id:req.params.id},{
        $set:{
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
    }
         
    }).then(()=>{
        return res.status(200).json("data updated sucssful");
    }).catch((err)=>{
        return res.status(500).json({Error:err});
    })
});

router.delete('/:id',(req,res)=>{
    SpeakerModel.deleteOne({_id:req.params.id}).then((result)=>{
        return res.status(200).json(result);
    }).catch((err)=>{
        return res.status(500).json({Error:err});
    })
});


module.exports = router;