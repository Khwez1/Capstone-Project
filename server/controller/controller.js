import { goGetProducts, goGetProduct, goPostProduct, goDeleteProduct, goPatchProduct, goGetUsers, goGetUser, goPostUser, goDeleteUser, goPatchUser } from "../models/database.js";
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
            const productId = +req.params.id; // Convert the id to a number
            const product = await goGetProduct(productId);
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

    patchUser: async(req,res)=>{
        const [user] = await goGetProduct(+req.params.id)

        let {firstName, lastName, userRole, emailAdd, Password} = req.body

        firstName ? firstName=firstName: {firstName} = user

        lastName ? lastName=lastName: {lastName} = user

        userRole ? userRole=userRole: {userRole} = user

        emailAdd ? emailAdd=emailAdd: {emailAdd} = user

        Password ? Password=Password: {Password} = user

        await goPatchUser(firstName, lastName, userRole, emailAdd, Password,  +req.params.id)
        
        res.send(await goGetUsers())
    },
    
//Sign in feature
    postUser: async(req, res) => {
        const { firstName, lastName, userRole, emailAdd, Password } = req.body;
        await goPostUser(firstName, lastName, userRole, emailAdd, Password)
        res.send({msg})
    },
// log in feature
    postUser: async(req,res)=> {
        res.send({msg})
    }
}