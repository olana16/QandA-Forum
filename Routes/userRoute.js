const express = require('express')

const router = express.Router()

// import controllers function
const {register,login,check} = require('../controllers/userControllers')
const authMiddleware = require('../middlewaree/authMiddleware')



// register new user
router.post("/register",register)





// login user
router.post("/login", login)





// check user
router.get("/check",authMiddleware, check)

module.exports=router
