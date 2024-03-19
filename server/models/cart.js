import  {pool}  from "../config/config.js"
//cart table functions
const goPostCart = async (userID, prodID, quantity) => {
    // Insert new row into cart table with userID, productID, and quantity
    await pool.query(`
        INSERT INTO cart (userID, prodID, quantity)
        VALUES (?, ?, ?)
    `, [userID, prodID, quantity]);
};

const goPatchCart = async(userID, quantity, prodID, id)=>{
    await pool.query(`
        UPDATE cart
        SET userID= ?, quantity = ?, prodID = ?
        WHERE orderID = ?
    `,[userID, quantity, prodID, id])
    return goGetCarts()
};

const goGetUserCart = async (userID) => {
    // Retrieve cart contents for the user based on userID with the specified information
    const [cartItems] = await pool.query(`
        SELECT 
            c.quantity AS sold_quantity,
            p.amount AS price_per_unit,
            (c.quantity * p.amount) AS total_price,
            p.prodUrl,
            p.prodName,
            p.prodID
        FROM 
            cart c
        JOIN 
            products p ON c.prodID = p.prodID
        WHERE 
            c.UserID = ?
    `, [userID]);
    return cartItems;
};

const goGetCartById = async (orderID) => {
    // Retrieve cart contents for the user based on userID
    const [cartItems] = await pool.query(`
        SELECT * FROM cart WHERE orderID = ?
    `, [orderID]);
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

const goDeleteCartById = async (orderID) => {
    // Removes cart on admin
    await pool.query(`
        DELETE FROM cart
        WHERE orderID = ? 
    `, [orderID]);
};

const goDeleteFromCart = async (userID, prodID) => {
    // Remove a product from the user's cart
    await pool.query(`
        DELETE FROM cart
        WHERE userID = ? AND prodID = ?
    `, [userID, prodID]);
};

const getUserIdFromDatabase = async (emailAdd) => {
    const [[{userID}]] = await pool.query(`
    SELECT userID 
    FROM users 
    WHERE emailAdd = ?
    `, [emailAdd])
    return userID
};

const goUpdateProductQuantity = async (userID) => {
    // Update the quantity of products in stock after checkout
    await pool.query(`
    UPDATE products p
    JOIN (
        SELECT c.prodID, SUM(c.quantity) AS total_sold
        FROM cart c
        WHERE c.UserID = ?
        GROUP BY c.prodID
    ) AS soldTotals ON p.prodID = soldTotals.prodID
    SET p.quantity = p.quantity - soldTotals.total_sold;
    `, [userID]);
};

export { goUpdateProductQuantity, getUserIdFromDatabase, goPostCart, goPatchCart, goGetUserCart, goGetCartById, goDeleteCart, goDeleteCartById, goDeleteFromCart, goGetCarts }