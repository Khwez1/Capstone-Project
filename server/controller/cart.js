import { goPostCart, getUserIdFromDatabase, goGetCart, goDeleteCart, goDeleteFromCart, goGetCarts } from "../models/cart.js";
export default {
//cart table function
    postCart: async (req, res) => {
        // Get emailAdd from cookies
        const emailAdd = req.emailAdd;    
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
    getCarts: async(req,res)=>{
        res.send(await goGetCarts())
    },
    getCart: async (req, res) => {
        const emailAdd = req.emailAdd;    
        const userID = await getUserIdFromDatabase(emailAdd)
        res.send(await  goGetCart(userID));
    },
    deleteCart: async (req, res) => {
        const emailAdd = req.emailAdd;    
        const userID = await getUserIdFromDatabase(emailAdd)
        res.send(await goDeleteCart(userID));
    },
    DeleteFromCart: async (req, res) => {
        const emailAdd = req.emailAdd;
        const {prodID} = req.body;   
        const userID = await getUserIdFromDatabase(emailAdd)
        res.send(await  goDeleteFromCart(userID,prodID));
    }
}