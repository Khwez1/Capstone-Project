import express from 'express';
import controller from '../controller/users.js';

const router = express.Router();

router
    .route('/user')
        .get(controller.getUser)
        .patch(controller.patchUserProfile)
router
    .route('/admin')
        .post(controller.getUserRole)

router
    .route('/')
        .post(controller.postUser)
        .get(controller.getUsers)
    
router
    .route('/:id')
        .delete(controller.deleteUser)
        .patch(controller.patchUser)

export default router