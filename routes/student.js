const express = require("express");

const router = express.Router();

const Controller = require("../controller/StudentsController");

router.get('/',Controller.getAllStudents);

router.get('/:id',Controller.getStudent);

router.post('/',Controller.createStudent);

router.put('/:id',Controller.editStudent);

router.delete('/:id',Controller.deleteStudent);


module.exports = router;