const express = require('express')

const router = express.Router()


// register new user
router.post("/register", (req,res)=>{
    res.send("welcome register")
})

// login user
router.post("/login", (req,res)=>{
    res.send("welcome login")
})

// check user

router.get("/check", (req,res)=>{
    res.send("welcome check")
})

module.exports=router
