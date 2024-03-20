import express from 'express';
import controller from '../controller/users.js';

const router = express.Router();

router
    .route('/user')
        .get(controller.getUser)
        .patch(controller.patchUserProfile)
router
    .route('/admin')
        .get(controller.getUserRole)

router
    .route('/')
        .get(controller.getUsers)
        .post(controller.postUser)
    
router
    .route('/:id')
        .delete(controller.deleteUser)
        .patch(controller.patchUser)

        

export default router