import  pool  from "../config/config.js"
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
}

const goGetProduct = async (id) => {
    const [result] = await pool.query(`
    SELECT * 
    FROM products
    WHERE prodID = ?`, [id]);
    // error handling, checking whether the id param matches the prodID
    if (!id || isNaN(id) || id>result ){
        throw error();
    }
    return result;
}

const goPostProduct = async(prod_name, quantity, amount, category, ProdURL)=>{
    const [product] = await pool.query(`
        INSERT INTO products(prodName, quantity, amount, category, ProdUrl) VALUES (?,?,?,?,?)
    `,[prod_name, quantity, amount, category, ProdURL])
    if (!prod_name || !quantity || !amount || !category || !ProdURL) {
        throw error();
    }
    return goGetProducts()
}

const goDeleteProduct = async(id)=>{
    const [product] = await pool.query(`
        DELETE FROM products
        WHERE prodID = ?
    `,[id])
    return goGetProducts()
} 

const goPatchProduct = async(prod_name, quantity, amount, category,ProdURL,id)=>{
    await pool.query(`
        UPDATE products
        SET prodName = ?, quantity = ?, amount = ?, category = ?, ProdUrl=?
        WHERE prodID = ?
    `,[prod_name, quantity, amount, category,ProdURL,id])
    return goGetProducts()
}
//Users table 
const goGetUsers= async()=>{
    const [result] = await pool.query(`
    SELECT * FROM users`)
    if (!result || result.length === 0){
        throw error();
    }
    return result
}

const goGetUser = async(id)=>{
    const [result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE userID = ?`,[id])
    if (!id || isNaN(id) || id>result ){
        throw error();
    }
    return result
}
//Sign in function
const goPostUser = async(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)=>{
    await pool.query(`
    INSERT INTO users (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) 
    VALUES (?,?,?,?,?,?,?,?);
    `,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile])
    if (!firstName || !lastName || !userAge || !Gender || !userRole || !emailAdd || !userPass || !userProfile){
        throw error();
    }
    return goGetUsers()
}

const goDeleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM users
        WHERE UserID = ?
    `,[id])
    return goGetUsers()
} 

const goPatchUser = async(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id)=>{
    await pool.query(`
        UPDATE users
        SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ?
        WHERE userID = ?
    `,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id])
    return goGetUsers()
}
//login table function
const logIn = async(emailAdd)=> {
    const [[{userPass}]] = await pool.query(`
    SELECT userPass 
    FROM users 
    WHERE emailAdd = ?
    `, [emailAdd])
    return userPass
}

export { logIn, goGetProduct, goPostProduct, goDeleteProduct, goPatchProduct, goGetProducts, goGetUsers, goGetUser, goPostUser, goDeleteUser, goPatchUser }