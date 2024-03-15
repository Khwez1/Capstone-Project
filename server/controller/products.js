import { goGetProducts, goGetProduct, goPostProduct, goDeleteProduct, goPatchProduct } from "../models/products.js";
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
        // try {
            const prodID = +req.params.id; // Convert the id to a number
            const product = await goGetProduct(prodID);
            res.send(product);
        // } catch (error) {
        //     console.error("Error occurred while fetching product");
        //         res.status(404).json({ msg: "product was not found" }); 
        // }
    },
    
    postProduct: async(req,res)=>{
        try{
            const { prodName, quantity, amount, description, date, category, prodUrl } = req.body;
            await goPostProduct(prodName, quantity, amount, description, date, category, prodUrl);
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

        let {prodName, quantity, amount, description, date, category, prodUrl} = req.body

        prodName ? prodName=prodName: {prodName} = product

        quantity ? quantity=quantity: {quantity} = product

        amount ? amount=amount: {amount} = product

        description ? description=description: {description} = product
        
        date ? date=date: {date} = product

        category ? category=category: {category} = product

        prodUrl ? prodUrl=prodUrl: {prodUrl} = product

        await goPatchProduct(prodName, quantity, amount, description, date, category, prodUrl,+req.params.id)
        
        res.send(await goGetProducts())
    }
}