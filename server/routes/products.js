import express from 'express';
import controller from '../controller/controller.js';

const router = express.Router();

router
    .route('/')
        .get(controller.getProducts)
        .post(controller.postProduct)
        
router
    .route('/:id')
        .get(controller.getProduct)
        .delete(controller.deleteProduct)
        .patch(controller.patchProduct)

export default router