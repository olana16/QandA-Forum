const dbConnection = require('../db/dbConfig')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

async function register(req, res) {

    const { username, firstname, lastname, email, password } = req.body

    if (!username || !firstname || !lastname || !password || !email) {
        return res.status(400).json({ msg: "please provide all information " })
    }

    try {



        const [user] = await dbConnection.query("select username, userid from users where username =? or email =?", [username, email])
        if (user.length > 0) {
            return res.status(400).json({ msg: "user alreasy exist" })
        }

        if (password.length <= 8) {
            return res.status(400).json({ msg: "password must be atleast 8 charachters" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


        await dbConnection.query("INSERT INTO users(username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)",
            [username, firstname, lastname, email, hashedPassword])
        return res.status(201).json({ msg: "user created" })

    } catch (error) {

        res.status(500).json({ msg: "Something went wrong, please try again" })

    }





}


async function login(req, res) {

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ msg: "please provide required credentials" })
    }


    try {

        const [user] = await dbConnection.query("select username, userid, password from users where email=?", [email])
        if (user.length == 0) {
            return res.status(400).json({ msg: "invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user[0].password)
        if (!isMatch) {
            return res.status(400).json({ msg: "invalid credentials" })

        }

        const username = user[0].username
        const userid = user[0].userid
        const token = jwt.sign({ username, userid }, process.env.JWT_SECRET, { expiresIn: "1d" })

        return res.status(200).json({ msg: "user login sucessfully", token })




    } catch (error) {
        res.status(500).json({ msg: "Something went wrong, please try again" })

    }




}


function check(req, res) {

const username = req.user.username
const userid = req.user.userid
res.status(200).json({msg:"authenticated", username,userid})
}

module.exports = { login, register, check }