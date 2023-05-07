const express = require("express");
const app =express();
const PORT = 5555;
const mongoose = require("mongoose");

const speakerRoute = require('./routes/speaker');
const studentRoute = require('./routes/student');
const eventRoute = require('./routes/event');


app.use(express.json());


app.use('/student',studentRoute);     
app.use('/speaker',speakerRoute);
app.use('/event',eventRoute);

// connection db 
const connection = mongoose.connect("mongodb://127.0.1:27017/EventSystem",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err) return console.log("DB Connected");
}); 





app.listen(PORT,(err)=>{
    if(!err) return (console.log(`server start at port ${PORT}`))
    console.log(err);
})

module.exports = connection;