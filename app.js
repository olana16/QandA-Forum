
require('dotenv').config()
const express = require('express')

const app = express()

const port = 5500


// importing database config
const dbConnection = require('./db/dbConfig')



// import user routes middleware file
const userRoute = require('./Routes/userRoute')



//json middleware
app.use(express.json())



// userROute middleware

app.use("/api/users", userRoute)


// Question Routes middleware file
const questionsRoutes = require("./Routes/questionRoutes");
app.use("/api", questionsRoutes);



// Use answer routes
const answerRoutes = require('./Routes/answerRoutes')
app.use("/api", answerRoutes);



async function start() {

    try {
        const result = await dbConnection.execute("select 'test' ")
        app.listen(port)
        console.log("database connection stablished")

        console.log(`server runining on port ${port}`)


    } catch (error) {
        console.log(error)

    }

}

start()








