import express from 'express';
import controller from '../controller/controller.js';

const router = express.Router();

router
    .route('/')
        .post(controller.postToCart)

export default router