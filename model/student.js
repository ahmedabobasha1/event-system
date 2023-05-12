const mongoose = require("mongoose");

const  validator = require('validator');

const AutoIncrement = require('mongoose-sequence')(mongoose);

const studentschema = new mongoose.Schema({
    _id:{
        type:Number
    },
    firstName:{
        type:String ,
},
    lastName:{
        type:String ,
    },
    password :{
        type:String,
        
    },
    email : {
        type:String ,
        unique:true,
         
    }
}, { _id: false });


    studentschema.plugin(AutoIncrement);

        // mapping

const studentModel = mongoose.model("student",studentschema);

module.exports = studentModel;

