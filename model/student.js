const mongoose = require("mongoose");

const  validator = require('validator');

const AutoIncrement = require('mongoose-sequence')(mongoose);


const studentschema = new mongoose.Schema({
    _id:{
        type:Number,
    },
    firstName:{
        type:String ,
        required:true,
    },
    lastName:{
        type:String ,
        required:true,
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
       } 
    }
}, { _id: false });


    studentschema.plugin(AutoIncrement);

const studentModel = mongoose.model("student",studentschema);

module.exports = studentModel;

