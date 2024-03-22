import jwt from 'jsonwebtoken';
//checks if user is logged in
const authenticate = (req,res,next) => {
    // let {cookie} = req.headers
    // let tokenInHeader = cookie && cookie.split('=')[1]
    let tokenInHeader = req.query.token
    if(tokenInHeader===null) res.sendStatus(401)
    jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user)=>{
        if(err)return res.sendStatus(403)
        req.user = user
        req.emailAdd = user.emailAdd;
        // console.log(req.emailAdd);
    next()
    })
}

export { authenticate };