import { logIn } from "../models/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//login feature
const auth = async(req,res,next) => {
    const {emailAdd, userPass} = req.body
    const hashedPassword = await logIn(emailAdd)
    bcrypt.compare(userPass, hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {emailAdd} = req.body
            const token = jwt.sign({emailAdd:emailAdd}, process.env.SECRET_KEY,{expiresIn: '1h'})
            
            console.log(token);

            res.send({
                token: token,
                msg: 'You have logged in! YAY!'
            })


            next();

        }else{
            res.send({msg: 'The emailAdd or password is incorrect'})
        }
    })
}
// sign in feature
const certify = async (req, res, next) => {
    const { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
    bcrypt.hash(userPass, 10, async (err, hash) => {
        if (err) throw err;
        await goPostUser(firstName, lastName, userAge, Gender, userRole, emailAdd, hash, userProfile);

        // Generate JWT token
        const token = jwt.sign({ email: emailAdd }, secretKey, { expiresIn: '1h' }); // Adjust expiry as needed

        // Set the token in a cookie
        res.cookie('token', token, { httpOnly: true });

        res.send({
            msg: "You have created an account"
        })
        
        next();
    });
}

export { auth, certify };