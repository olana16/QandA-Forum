function register(req,res){

    res.send("register")

}


function login(req,res){

    res.send("login")
}


function check(req,res){

    res.send("check")
}

module.exports={login,register,check}