import express from 'express';
import controller from '../controller/controller.js';

const router = express.Router();

router
    .route('/')
        .get(controller.postUser)
    
export default router