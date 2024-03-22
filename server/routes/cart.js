import express from 'express';
import controller from '../controller/cart.js';

const router = express.Router();

router
    .route('/admin')
        .post(controller.postCartByAdmin)

router       
    .route('/')
        .get(controller.getCarts)
        .delete(controller.deleteCart)

router
    .route('/user')
        .post(controller.postCart)
        
router
    .route('/user/cart')
        .post(controller.getUserCart)

router
    .route('/user/:id')
        .delete(controller.DeleteFromCart)

router
    .route('/:id') 
        .patch(controller.patchCart)
        .delete(controller.deleteCartById)

export default router