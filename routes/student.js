const express = require("express");

const {body}= require("express-validator");
const router = express.Router();

const validationMD =require("../middelware/validationMD"); 

const Controller = require("../controller/StudentsController");



router.get('/',Controller.getAllStudents);

router.get('/:id',Controller.getStudent);

router.post('/',
[
    body('firstName')
    .isAlpha().withMessage("student firstname should be characters")
    .isLength({min:3}).withMessage("student firstname length must be more than 3 characters "),

    body("lastName")
    .isAlpha().withMessage("student lastname should be characters")
    .isLength({min:3}).withMessage("student lastname length must be more than 3 characters "),

    body('password')
    .isStrongPassword().withMessage("student password must be StrongPassword"),
    
    body("email").isEmail().withMessage("please enter valid email "),
]
,validationMD,Controller.createStudent);

router.put('/:id',
[
    body('firstName')
    .isAlpha().withMessage("student firstname should be characters")
    .isLength({min:3}).withMessage("student firstname length must be more than 3 characters "),

    body("lastName")
    .isAlpha().withMessage("student lastname should be characters")
    .isLength({min:3}).withMessage("student lastname length must be more than 3 characters "),

    body('password')
    .isStrongPassword().withMessage("student password must be StrongPassword"),
    
    body("email").isEmail().withMessage("please enter valid email "),
],validationMD,Controller.editStudent);

router.delete('/:id',Controller.deleteStudent);


module.exports = router;