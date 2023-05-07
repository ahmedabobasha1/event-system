const mongoose = require("mongoose");
const  validator = require('validator');
//const passwordValidator = require('password-validator');
const speakerSchema = new mongoose.Schema({
    firstName:{
        type:String ,
        required:true,
        minlength:3
    },
    lastName:{
        type:String ,
        required:true,
        minlength:3,
    },
    password :{
        type:String,
        minlength:8,
        maxlength:100,
        trim : true
    },
    email : {
        type:String ,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
       } },
    image:{
        type:String,
    }

});

const SpeakerModel = mongoose.model("speaker",speakerSchema)


module.exports = SpeakerModel;