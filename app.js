const express = require('express')

const app = express()

const port = 5500


// register new user
app.get("/api/users/register", (req,res)=>{
    res.send("welcome register")
})

// login user
app.get("/api/users/login", (req,res)=>{
    res.send("welcome login")
})

// check user

app.get("/api/users/check", (req,res)=>{
    res.send("welcome check")
})










app.listen(port, (err)=>{
    if(err){
        console.log(err)

    }
    else{
        console.log(`server runining on port ${port}`)
    }
})