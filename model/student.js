const mongoose = require("mongoose");

const  validator = require('validator');

const autoIncrement = require('mongoose-auto-increment');

const connection = require("../index");


autoIncrement.initialize(connection);

const studentschema = new mongoose.Schema({
    // _id:{
    //     type:Number,
    //     unique:true
    // },
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
       } },
});


studentschema.plugin(autoIncrement.plugin, 'student');

const studentModel = mongoose.model("student",studentschema);

module.exports = studentModel;

