const express = require('express')

const app = express()

const port = 5500

// import user routes middleware file

const userRoute = require('./Routes/userRoute')


// userROute middleware

app.use("/api/users", userRoute)









app.listen(port, (err)=>{
    if(err){
        console.log(err)

    }
    else{
        console.log(`server runining on port ${port}`)
    }
})