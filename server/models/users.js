
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
const goGetUserByID = async(id)=>{
    const [result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE userID = ?`,[id])
    return result
};
//Sign in function
const goPostUser = async (firstName, lastName, userRole, emailAdd, Password) => {
    try {
        // Attempt to execute the database query
        await pool.query(`
            INSERT INTO users (firstName, lastName, userRole, emailAdd, Password) 
            VALUES (?,?,?,?,?);
        `, [firstName, lastName, userRole, emailAdd, Password]);

        // If the query is successful, return the result of goGetUsers()
        return  goGetUsers();
    } catch (error) {
        throw error;
    }
};

const goDeleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM users
        WHERE UserID = ?
    `,[id])
    return goGetUsers()
}; 

const goPatchUser = async(firstName, lastName, userRole, emailAdd, Password, id)=>{
    await pool.query(`
        UPDATE users
        SET firstName = ?, lastName = ?, userRole = ?, emailAdd = ?, Password = ?
        WHERE userID = ?
    `,[firstName, lastName, userRole, emailAdd, Password, id])
    return goGetUsers()
};

const goPatchUserProfile = async(firstName, lastName, userRole, emailAdd, Password, email)=>{
    await pool.query(`
        UPDATE users
        SET firstName = ?, lastName = ?, userRole = ?, emailAdd = ?, Password = ?
        WHERE emailAdd = ?
    `,[firstName, lastName, userRole, emailAdd, Password, email])
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

const getUserInfoFromDatabase = async (emailAdd) => {
    const [[result]] = await pool.query(`
    SELECT * 
    FROM users 
    WHERE emailAdd = ?
    `, [emailAdd])
    return result
};

export {  logIn, goGetUsers, goGetUser, goGetUserByID, goPostUser, goDeleteUser, goPatchUser,goPatchUserProfile, getUserInfoFromDatabase }
