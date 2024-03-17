import express from 'express';
import controller from '../controller/cart.js';

const router = express.Router();

router
    .route('/')
        .post(controller.postCart)
        .post(controller.postCartByAdmin)
        .get(controller.getCarts)
        .get(controller.getCart)
        .delete(controller.deleteCart)
        .delete(controller.DeleteFromCart)
router
    .route('/:id') 
        .patch(controller.patchCart)
        .delete(controller.deleteCartById)

export default router