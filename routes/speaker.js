const express = require("express");
const router = express.Router();
const controller= require("../controller/SpeakerController");


router.get('/',controller.getAllSpeakers);

router.get('/:id',controller.getSpeaker);

router.post('/',controller.createSpeaker);

router.put('/:id',controller.editSpeaker);

router.delete('/:id',controller.deleteSpeaker);


module.exports = router;