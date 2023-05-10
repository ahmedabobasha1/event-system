const express = require("express");
const server =express();
const PORT = 5555;
const mongoose = require("mongoose");

const speakerRouter = require('./routes/speaker');
const studentRouter = require('./routes/student');
const eventRouter = require('./routes/event');


server.use(express.json());


server.use('/student',studentRouter);     
server.use('/speaker',speakerRouter);
server.use('/event',eventRouter);

// connection db 
mongoose.connect("mongodb://127.0.1:27017/EventSystem",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err) return console.log("DB Connected");
}); 





server.listen(PORT,(err)=>{
    if(!err) return (console.log(`server start at port ${PORT}`))
    console.log(err);
})
