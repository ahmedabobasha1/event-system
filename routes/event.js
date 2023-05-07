const express = require("express");
const router = express.Router();

const eventModel = require("../model/event");



router.get('/',(req,res)=>{
    eventModel.find().then((result)=>{
        return res.status(200).json(result);
    }).catch((err)=>{
        return res.status(201).json({Error:err})
    }).populate('speaker').populate('student');
});

router.get('/:id',(req,res)=>{
    console.log('get specific id');
})

router.post('/',(req,res)=>{
    const event = new eventModel({...req.body});
    console.log(event);
    event.save().then((result)=>{
        return res.status(200).json(result)
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({Error:err})
    })    
});

router.put('/:id',(req,res)=>{
    console.log('edit data');
});

router.delete('/:id',(req,res)=>{
    console.log('delete data')
});


module.exports = router;