import { goUpdateProductQuantity, goPostCart, goPatchCart, getUserIdFromDatabase, goGetUserCart, goGetCartById, goDeleteCart, goDeleteCartById, goDeleteFromCart, goGetCarts } from "../models/cart.js";
export default {
//cart table function for the user
    postCart: async (req, res) => {
        // Get emailAdd from cookies
        const emailAdd = req.emailAdd;    
        // Use a function to find the userID based on emailAdd
        try{
            const userID = await getUserIdFromDatabase(emailAdd)
            console.log(userID);
            // Assuming prodID and quantity are obtained from request body or query parameters
            const { prodID, quantity } = req.body;
            
            // Insert product into cart table using userID and prodID
            await goPostCart(userID, prodID, quantity);

            res.send({ msg: 'Product added to cart successfully' });
        }catch (error) {
            console.error('Error:', error);
            res.status(500).send({ error: 'An error occurred while adding product to cart' });
        }
    },
    getUserCart: async (req, res) => {
        try {
            const emailAdd = req.emailAdd;
            const userID = await getUserIdFromDatabase(emailAdd);
            const userCart = await goGetUserCart(userID);
            res.send(userCart);
        } catch (error) {
            console.error("Error fetching user cart:", error);
            res.status(404).send({msg:"There are no Items in cart"});
        }
    },
    deleteCart: async (req, res) => {
        const emailAdd = req.emailAdd;    
        const userID = await getUserIdFromDatabase(emailAdd)
        goUpdateProductQuantity(userID)
        await goDeleteCart(userID);
        res.send({msg:'Thank you for your purchase'})
    },
    DeleteFromCart: async (req, res) => {
        const emailAdd = req.emailAdd  
        const prodID = parseInt(+req.params.id)
        const userID = await getUserIdFromDatabase(emailAdd)
        res.send(await  goDeleteFromCart(userID,prodID))
    },
//cart table function for the Admin
    getCarts: async (req, res) => {
        try {
            const carts = await goGetCarts();
            res.send(carts);
        } catch (error) {
            console.error("Error fetching carts:", error);
            res.status(404).send({msg:"No carts available"});
        }
    },
    deleteCartById: async(req,res)=>{
        res.send(await goDeleteCartById(+req.params.id));   
    },
    postCartByAdmin: async (req, res) => {
        try{
            const { userID, prodID, quantity } = req.body;
            
            await goPostCart(userID, prodID, quantity);
            console.log(userID,prodID,quantity);
            res.send({ msg: 'Product added to cart successfully' });
        }catch (error) {
            console.error('Error:', error);
            res.status(500).send({ error: 'An error occurred while adding product to cart' });
        }
    },
    patchCart: async(req,res)=>{
        const [cart] = await goGetCartById(+req.params.id)
        console.log(cart);
        let {UserID, quantity, prodID,} = req.body

        UserID ? UserID=UserID: {UserID} = cart

        quantity ? quantity=quantity: {quantity} = cart

        prodID ? prodID=prodID: {prodID} = cart

        await goPatchCart(UserID, quantity, prodID,+req.params.id)
        
        res.send(await goGetCarts())
    }
}