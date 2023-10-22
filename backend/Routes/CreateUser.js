const express = require('express')
const router = express.Router()
console.log("im in createuser.js")
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const secret="itsmeandiwilldoit"

router.post("/createuser", [body('email').isEmail(), body('name').isLength({ min: 3 }),
body('password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10)
    let secPassword=await bcrypt.hash(req.body.password,salt)
    try {
        await User.create({
            name: req.body.name,
            location: req.body.location,
            password: secPassword,
            email: req.body.email
        })
        res.json({ success: true })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
        //res.json({success:false})
    }
})


router.post("/loginuser", [body('email').isEmail(),
body('password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    let email=req.body.email;
    try {
        let userData=await User.findOne({email})
        if(!userData)
        return res.status(500).json({ success: false, error: "Enter valid details" });
        
        const comparePassword=bcrypt.compare(req.body.password,userData.password)//it returns true or false
        if(!comparePassword)
        return res.status(500).json({ success: false, error: "Enter valid details" });

        const data ={
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,secret)
        return res.json({ success: true ,authToken:authToken})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
        //res.json({success:false})
    }
})



module.exports = router;