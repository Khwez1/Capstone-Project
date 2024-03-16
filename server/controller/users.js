import { goGetUsers, goGetUser, goPostUser, goDeleteUser, goPatchUser, logIn, } from "../models/users.js";
import bcrypt from 'bcrypt';
export default {
//users table fuction
    getUsers: async(req,res)=>{
        res.send(await goGetUsers())
    },

    getUser: async(req,res)=>{
        const emailAdd = req.emailAdd;
        res.send(await goGetUser(emailAdd))
    },

    deleteUser: async(req,res)=>{
        res.send(await goDeleteUser(+req.params.id));   
    },

    patchUser: async (req, res) => {
        const [user] = await goGetProduct(+req.params.id);

        let { firstName, lastName, userRole, emailAdd, Password } = req.body;

        firstName ? firstName=firstName: {firstName} = user

        lastName ? lastName=lastName: {lastName} = user

        userRole ? userRole=userRole: {userRole} = user

        emailAdd ? emailAdd=emailAdd: {emailAdd} = user
        
        Password ? Password=Password: {Password} = user

        // Check if the password field is present in the request body
        if (Password) {
            // If present, hash the password
            try {
                Password = await bcrypt.hash(Password, 10);
            } catch (error) {
                console.error("Error hashing password:", error);
                res.status(500).send({ error: "An error occurred while hashing the password" });
                return;
            }
        } else {
            // If not present, use the existing password from the database
            Password = user.Password;
        }

        // Update user data in the database
        await goPatchUser(firstName, lastName, userRole, emailAdd, Password, +req.params.id);

        // Return updated user data
        res.send(await goGetUsers());
    },
    
//Sign up feature
postUser: async (req, res) => {
    const { firstName, lastName, userRole, emailAdd, Password } = req.body;
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Call the function to post user information to the database
        await goPostUser(firstName, lastName, userRole, emailAdd, hashedPassword);
        
        res.send({
            msg: "You have created an account"
        });
    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).send({ error: "An error occurred while creating the account" });
    }
},
// log in feature
    postLogIn: async(req,res)=> {
        const {emailAdd, Password} = req.body;
        await logIn(emailAdd, Password)
        res.send()
    }
}