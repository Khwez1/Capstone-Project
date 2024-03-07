import { logIn } from "../models/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//login feature
const auth = async(req,res,next) => {

    const {emailAdd, Password} = req.body
    const hashedPassword = await logIn(emailAdd)
    bcrypt.compare(Password, hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {emailAdd} = req.body
            const token = jwt.sign({emailAdd:emailAdd}, process.env.SECRET_KEY,{expiresIn: '1h'})
            
            console.log(emailAdd);

            res.cookie('token', token,{ httpOnly:false, expiresIn:'1hr'});
            

            res.send({
                msg: 'You have logged in! YAY!'
            })


            next();

        }else{
            res.send({msg: 'The emailAdd or password is incorrect'})
        }
    })
}
//
const authenticate = (req,res,next) => {
    let {cookie} = req.headers
    let tokenInHeader = cookie && cookie.split('=')[1]
    if(tokenInHeader===null) res.sendStatus(401)
    console.log(tokenInHeader)
    jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user)=>{
        if(err)return res.sendStatus(403)
        req.user = user
        next()
    })
}

export { auth, authenticate };