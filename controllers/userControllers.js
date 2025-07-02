const dbConnection = require('../db/dbConfig')

const bcrypt = require('bcrypt')


async function register(req,res){

const {username, firstname, lastname, email, password} = req.body

if(!username || !firstname || !lastname || !password || !email){
    return res.status(400).json({msg: "please provide all information "})
}

try {



    const [user] = await dbConnection.query("select username, userid from users where username =? or email =?", [username, email])
    if(user.length>0){
       return res.status(400).json({msg:"user alreasy exist"})
    }

    if(password.length <=8){
        return res.status(400).json({msg:"password must be atleast 8 charachters"})
    }

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)


    await dbConnection.query("INSERT INTO users(username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)" ,
        [username, firstname, lastname, email, hashedPassword])
        return res.status(201).json({msg: "user created"})
    
} catch (error) {

    res.status(500).json({msg: "Something went wrong, please try again"})
    
}





}


async function login(req,res){

    res.send("login")
}


function check(req,res){

    res.send("check")
}

module.exports={login,register,check}