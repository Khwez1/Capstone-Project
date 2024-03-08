import { goGetProduct, goGetUsers, goGetUser, goPostUser, goDeleteUser, goPatchUser, logIn,  } from "../models/users.js";
export default {
//users table fuction
    getUsers: async(req,res)=>{
        res.send(await goGetUsers())
    },

    getUser: async(req,res)=>{
        res.send(await goGetUser(+req.params.id))
    },

    deleteUser: async(req,res)=>{
        res.send(await goDeleteUser(+req.params.id));   
    },

    patchUser: async (req, res) => {
        const [user] = await goGetProduct(+req.params.id);

        let { firstName, lastName, userAge, emailAdd, Password } = req.body;

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
        await goPatchUser(firstName, lastName, userAge, emailAdd, Password, +req.params.id);

        // Return updated user data
        res.send(await goGetUsers());
    },
    
//Sign up feature
postUser: async (req, res) => {
    const { firstName, lastName, userRole, emailAdd, Password } = req.body;
    try {
        await bcrypt.hash(Password, 10, async(err, hash)=> {
            if(err) throw err});
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