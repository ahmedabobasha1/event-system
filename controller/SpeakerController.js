const SpeakerModel = require("../model/speaker")

getAllSpeakers = (req,res)=>{
   
    SpeakerModel.find({}).then((result)=>{
        return res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({Error:err})
    })
}

getSpeaker = (req,res)=>{
    SpeakerModel.findById({_id:req.params.id}).then((result)=>{
        return res.status(200).json(result)
    }).catch((err)=>{
        return res.status(500).json({Error:err})
    });
}

createSpeaker = (req,res)=>{
    const speaker = new SpeakerModel({...req.body})
    speaker.save().then((result)=>{
        return res.status(201).json(result);
    }).catch((err)=>{
        return res.status(500).json({Error:err});
    })
}
editSpeaker =(req,res)=>{
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
}
deleteSpeaker = (req,res)=>{
    SpeakerModel.deleteOne({_id:req.params.id}).then((result)=>{
        return res.status(200).json("deltet sucssful");
    }).catch((err)=>{
        return res.status(500).json({Error:err});
    })
}
 module.exports = {getAllSpeakers,getSpeaker,createSpeaker,editSpeaker,deleteSpeaker}