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
    const [result] = await pool.query(`
    SELECT * 
    FROM products
    WHERE prodID = ?`, [id]);
    if (!id || isNaN(id) || id>result ){
        throw error();
    }
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


export { goGetProduct, goPostProduct, goDeleteProduct, goPatchProduct, goGetProducts }