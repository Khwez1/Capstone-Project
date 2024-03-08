import { goGetProducts, goGetProduct, goPostProduct, goDeleteProduct, goPatchProduct, goGetUsers, goGetUser, goPostUser, goDeleteUser, goPatchUser, logIn, goPostCart, getUserIdFromDatabase } from "../models/database.js";
export default {
//products table functions
    getProducts: async (req, res) => {
        try {
            const products = await goGetProducts();
            res.send(products);
        } catch (error) {
            console.error("Error occurred while fetching products:");
            res.status(500).json({ msg: "Internal Server Error" });
        }
    },

    getProduct: async (req, res) => {
        try {
            const prodID = +req.params.id; // Convert the id to a number
            const product = await goGetProduct(prodID);
            res.send(product);
        } catch (error) {
            console.error("Error occurred while fetching product");
                res.status(404).json({ msg: "product was not found" }); 
        }
    },
    
    postProduct: async(req,res)=>{
        try{
            const { prodName, quantity, amount, category, prodUrl } = req.body;
            await goPostProduct(prodName, quantity, amount, category, prodUrl);
            res.send(await goGetProducts())
        } catch (error){
            console.error("Error adding product");
                res.status(404).json({msg: "Couldn't add Product"})
        }
    },

    deleteProduct: async(req,res)=>{
        res.send(await goDeleteProduct(+req.params.id));   
    },

    patchProduct: async(req,res)=>{
        const [product] = await goGetProduct(+req.params.id)

        let {prodName, quantity, amount, category, prodUrl} = req.body

        prodName ? prodName=prodName: {prodName} = product

        quantity ? quantity=quantity: {quantity} = product

        amount ? amount=amount: {amount} = product

        category ? category=category: {category} = product

        prodUrl ? prodUrl=prodUrl: {prodUrl} = product

        await goPatchProduct(prodName, quantity, amount, category, prodUrl,+req.params.id)
        
        res.send(await goGetProducts())
    },
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
    },
//cart table function
    postCart: async (req, res) => {
        // Get emailAdd from cookies
        const emailAdd = req.emailAdd;    
        console.log(emailAdd);
        // Use a function to find the userID based on emailAdd
        try {
            const userID = await getUserIdFromDatabase(emailAdd)
            
            // Assuming prodID and quantity are obtained from request body or query parameters
            const { prodID, quantity } = req.body;

            // Insert product into cart table using userID and prodID
            await goPostCart(userID, prodID, quantity);

            res.send({ msg: 'Product added to cart successfully' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send({ error: 'An error occurred while adding product to cart' });
        }
    },
    getCart: async (req, res) => {
        const emailAdd = req.emailAdd;    
        console.log(emailAdd);
        const userID = await getUserIdFromDatabase(emailAdd)
        res.send(await  goGetCart(userID));
    },
    deleteCart: async (req, res) => {
        const emailAdd = req.emailAdd;    
        console.log(emailAdd);
        const userID = await getUserIdFromDatabase(emailAdd)
        res.send(await  goDeleteCart(userID));
    }
}