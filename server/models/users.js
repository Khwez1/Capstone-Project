import  {pool}  from "../config/config.js"
//Users table functions
const goGetUsers= async()=>{
    const [result] = await pool.query(`
    SELECT * FROM users`)
    if (!result || result.length === 0){
        throw error();
    }
    return result
};

const goGetUser = async(emailAdd)=>{
    const [result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE emailAdd = ?`,[emailAdd])
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

export {  logIn, goGetUsers, goGetUser, goPostUser, goDeleteUser, goPatchUser }