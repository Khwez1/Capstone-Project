import  {pool}  from "../config/config.js"
//Products table functions
const goGetProducts = async () => {
    const [result] = await pool.query(`
    SELECT * 
    FROM products
    `);
    if (!result || result.length === 0){
        throw error();
    }
    return result;
};

const goGetProduct = async (id) => {
    if (!id || isNaN(id) || id>result ){
        throw error();
    }
    const [result] = await pool.query(`
    SELECT * 
    FROM products
    WHERE prodID = ?`, [id]);
    // error handling, checking whether the id param matches the prodID
    return result;
};

const goPostProduct = async(prodName, quantity, amount, category, prodUrl)=>{
    if (!prodName || !quantity || !amount || !category || !prodUrl) {
        throw error();
    }
    const [product] = await pool.query(`
        INSERT INTO products(prodName, quantity, amount, category, prodUrl) VALUES (?,?,?,?,?)
    `,[prodName, quantity, amount, category, prodUrl])
    return goGetProducts()
};

const goDeleteProduct = async(id)=>{
    const [product] = await pool.query(`
        DELETE FROM products
        WHERE prodID = ?
    `,[id])
    return goGetProducts()
};

const goPatchProduct = async(prod_name, quantity, amount, category,prodUrl,id)=>{
    await pool.query(`
        UPDATE products
        SET prodName = ?, quantity = ?, amount = ?, category = ?, prodUrl=?
        WHERE prodID = ?
    `,[prod_name, quantity, amount, category,prodUrl,id])
    return goGetProducts()
};
//Users table functions
const goGetUsers= async()=>{
    const [result] = await pool.query(`
    SELECT * FROM users`)
    if (!result || result.length === 0){
        throw error();
    }
    return result
};

const goGetUser = async(id)=>{
    if (!id || isNaN(id) || id>result ){
        throw error();
    }
    const [result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE userID = ?`,[id])
    return result
};
//Sign in function
const goPostUser = async (firstName, lastName, userRole, emailAdd, Password) => {
    if (!firstName || !lastName || !userRole || !emailAdd || !Password) {
        throw new Error("Missing required fields");
    }
    
    try {
        await pool.query(`
            INSERT INTO users (firstName, lastName, userRole, emailAdd, Password) 
            VALUES (?,?,?,?,?);
        `, [firstName, lastName, userRole, emailAdd, Password]);
        
        return await goGetUsers();
    } catch (error) {
        throw new Error("Error inserting user: " + error.message);
    }
};

const goDeleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM users
        WHERE UserID = ?
    `,[id])
    return goGetUsers()
}; 

const goPatchUser = async(firstName, lastName, userAge, Gender, userRole, emailAdd, Password, id)=>{
    await pool.query(`
        UPDATE users
        SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole = ?, emailAdd = ?, Password = ?
        WHERE userID = ?
    `,[firstName, lastName, userAge, Gender, userRole, emailAdd, Password, id])
    return goGetUsers()
};
//login table function
const logIn = async(emailAdd)=> {
    const [[{Password}]] = await pool.query(`
    SELECT Password 
    FROM users 
    WHERE emailAdd = ?
    `, [emailAdd])
    return Password
};
//cart table functions
const goPostToCart = async (userID, productID, quantity) => {
    // Insert new row into cart table with userID, productID, and quantity
    await pool.query(`
        INSERT INTO carts (userID, prodID, quantity)
        VALUES (?, ?, ?)
    `, [userID, productID, quantity]);
};

const getUserCart = async (userID) => {
    // Retrieve cart contents for the user based on userID
    const [cartItems] = await pool.query(`
        SELECT * FROM carts WHERE userID = ?
    `, [userID]);
    return cartItems;
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

export { getUserIdFromDatabase, goPostToCart, getUserCart, removeFromCart, logIn, goGetProduct, goPostProduct, goDeleteProduct, goPatchProduct, goGetProducts, goGetUsers, goGetUser, goPostUser, goDeleteUser, goPatchUser }