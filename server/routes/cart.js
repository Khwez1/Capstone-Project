import express from 'express';
import controller from '../controller/cart.js';

const router = express.Router();

router
    .route('/')
        .post(controller.postCart)
        .get(controller.getCarts)
        .get(controller.getCart)
        .delete(controller.deleteCart)
        .delete(controller.DeleteFromCart)
export default router