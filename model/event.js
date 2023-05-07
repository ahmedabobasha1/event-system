const mongoose =require("mongoose");

const eventSchema = new mongoose.Schema({
    title :{
        type:String,
    },
    eventDate:{
        type:Date,
        default: Date.now
    },
    mainSpeaker:{
        type:String
    },
    Speaker:{
        type: mongoose.Schema.Types.ObjectId, ref : "speaker"
    },
    Student:{
        type: mongoose.Schema.Types.ObjectId, ref : "student"
    },
    
})


const eventModule = mongoose.model("eventData",eventSchema);


module.exports = eventModule;