import express from 'express';
import controller from '../controller/controller.js';

const router = express.Router();

router
    .route('/')
        .post(controller.postCart)
        .get(controller.getCart)
        .delete(controller.deleteCart)
export default router