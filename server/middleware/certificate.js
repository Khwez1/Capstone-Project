import { logIn } from "../models/users.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//login feature
const certificate = async(req,res,next) => {

    const {emailAdd, Password} = req.body
    const hashedPassword = await logIn(emailAdd)
    // console.log(typeof Password,typeof hashedPassword);
    bcrypt.compare(Password, hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {emailAdd} = req.body
            const token = jwt.sign({emailAdd:emailAdd}, process.env.SECRET_KEY,{expiresIn: '1h'})
            

            // console.log(token);

            // res.cookie('token', token,{ httpOnly:false, expiresIn:'1h'});
            

            res.send({
                token:token,
                msg: 'You have logged in! YAY!',
            })

            next();

        }else{
            res.status(401).send({msg: 'The emailAdd or password is incorrect'})
        }
    })
}

export { certificate };