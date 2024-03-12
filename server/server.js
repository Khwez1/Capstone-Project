import express from 'express';
// import crypto from 'crypto'
import {config} from 'dotenv';
import { authenticate } from '../server/middleware/authenticate.js'
import cors from 'cors'
import productsRouter from '../server/routes/products.js';
import cartRouter from '../server/routes/cart.js'
import usersRouter from '../server/routes/users.js';
import cookieParser from 'cookie-parser'
import loginRouter from '../server/routes/login.js';
import { certificate } from './middleware/certificate.js';
config()

const PORT=process.env.MYSQL_ADDON_PORT || 6969;

const app=express()


// function generateSecretKey() {
//     return crypto.randomBytes(32).toString('hex');
// }

// const secretKey = generateSecretKey();

// console.log("Generated Secret Key:", secretKey);

app.use(cors(
    { 
      origin: 'http://localhost:8080',
      credentials: true
    }
))

app.use(express.json())

app.use(express.static('public'))

app.use(cookieParser())

app.use('/products',  productsRouter)

app.use('/cart',  cartRouter)

app.use('/users', usersRouter)

app.use('/login', certificate, loginRouter)

app.listen (PORT,()=>{
    console.log(`this is listening on http://localhost:${PORT}`)
})
