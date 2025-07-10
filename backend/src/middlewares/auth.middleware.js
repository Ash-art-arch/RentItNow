/*const jwt = require("jsonwebtoken")

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
module.exports=protectedRoute*/
const jwt = require("jsonwebtoken");

const protectedRoute = (req, res, next) => {
  let token = null;

  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } else if (req.headers.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json("No Token Found");
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    console.log("Decoded user in middleware:", user); 
    next();
  } catch (e) {
    console.error("JWT Error:", e);
    return res.status(401).json("Invalid Token");
  }
};

module.exports = protectedRoute;
