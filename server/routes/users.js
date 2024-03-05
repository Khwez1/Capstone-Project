import express from 'express';
import controller from '../controller/controller.js';

const router = express.Router();

router
    .route('/')
        .get(controller.getUsers)
    
router
    .route('/:id')
        .get(controller.getUser)
        .delete(controller.deleteUser)
        .patch(controller.patchUser)

export default router