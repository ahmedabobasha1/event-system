const express = require("express");
const server =express();
const PORT = 5555;
const mongoose = require("mongoose");

const speakerRouter = require('./routes/speaker');
const studentRouter = require('./routes/student');
const eventRouter = require('./routes/event');


server.use(express.json()); // requset.body


server.use('/student',studentRouter);     
server.use('/speaker',speakerRouter);
server.use('/event',eventRouter);


// Not Found MW 

server.use((request,response)=>{
   response.status(404).json({masssage:"not found"})
})

// Error MW
    
server.use((error,request,response,next)=>{
    // handel erro status
    let status = error.status || 500
    response.status(status).json({masssage:"internal Error" + error});

})
// connection db 
mongoose.connect("mongodb://127.0.1:27017/EventSystem",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("DB connected");

    server.listen(PORT,(err)=>{
        if(!err) return (console.log(`server start at port ${PORT}`))
    console.log(err);
})

})
.catch((err)=>console.log("Db connection Error"+error))
; 



