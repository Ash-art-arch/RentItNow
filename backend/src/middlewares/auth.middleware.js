const jwt = require("jsonwebtoken")
const protectedRoute = (req, res, next) => {
    const token = req.cookies.token||req.headers.authorization;
    if(!token){
        return res.status(401).json("No Token Found")
    }
    try{    
        const user= jwt.verify(token,process.env.JWT_SECRET)
        req.user=user
        next()
    }catch(e){
        console.log(e)
        res.status(401).json("Invalid Token")
    }
}
module.exports=protectedRoute