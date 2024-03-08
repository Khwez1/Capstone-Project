import  {pool}  from "../config/config.js"
//cart table functions
const goPostCart = async (userID, productID, quantity) => {
    // Insert new row into cart table with userID, productID, and quantity
    await pool.query(`
        INSERT INTO carts (userID, prodID, quantity)
        VALUES (?, ?, ?)
    `, [userID, productID, quantity]);
};

const goGetCart = async (userID) => {
    // Retrieve cart contents for the user based on userID
    const [cartItems] = await pool.query(`
        SELECT * FROM carts WHERE userID = ?
    `, [userID]);
    return cartItems;
};


const goDeleteCart = async (userID) => {
    // Remove user's cart on checkout
    await pool.query(`
        DELETE FROM carts
        WHERE userID = ? 
    `, [userID]);
};

const removeFromCart = async (userID, productID) => {
    // Remove a product from the user's cart
    await pool.query(`
        DELETE FROM carts
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

export { getUserIdFromDatabase, goPostCart, goGetCart, goDeleteCart, removeFromCart }