import  {pool}  from "../config/config.js"
//cart table functions
const goPostCart = async (userID, productID, quantity) => {
    // Insert new row into cart table with userID, productID, and quantity
    await pool.query(`
        INSERT INTO cart (userID, prodID, quantity)
        VALUES (?, ?, ?)
    `, [userID, productID, quantity]);
};

const goGetCart = async (userID) => {
    // Retrieve cart contents for the user based on userID
    const [cartItems] = await pool.query(`
        SELECT * FROM cart WHERE userID = ?
    `, [userID]);
    return cartItems;
};

const goGetCarts= async()=>{
    const [result] = await pool.query(`
    SELECT * FROM cart`)
    if (!result || result.length === 0){
        throw error();
    }
    return result
};


const goDeleteCart = async (userID) => {
    // Remove user's cart on checkout
    await pool.query(`
        DELETE FROM cart
        WHERE userID = ? 
    `, [userID]);
};

const goDeleteFromCart = async (userID, productID) => {
    // Remove a product from the user's cart
    await pool.query(`
        DELETE FROM cart
        WHERE userID = ? AND productID = ?
    `, [userID, productID]);
};

const getUserIdFromDatabase = async (emailAdd) => {
    const [[{userID}]] = await pool.query(`
    SELECT userID 
    FROM users 
    WHERE emailAdd = ?
    `, [emailAdd])
    return userID
};

export { getUserIdFromDatabase, goPostCart, goGetCart, goDeleteCart, goDeleteFromCart, goGetCarts }