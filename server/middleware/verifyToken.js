const jwt= require('jsonwebtoken')

const verifyToken =(req,res,next) => {  
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized Request')
    }
    const token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
        if(err){
            return res.status(401).send('Unauthorized Request')
        }
        req.decoded=decode;
        next();
    })
}
module.exports=verifyToken;