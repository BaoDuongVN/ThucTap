import express from 'express';
import {getAllUsersController, createNewUserController, getUserByIDinUpdatePage, 
    getUserByIDinDeletePage, updateUserController, deleteUserController} from '../controllers/home.controllers';


const router = express.Router();

router.get('/user', getAllUsersController);
router.post('/user', createNewUserController);
router.get('/update/:id', getUserByIDinUpdatePage);
router.post('/update', updateUserController);
router.get('/delete/:id', getUserByIDinDeletePage)
router.post('/delete', deleteUserController);

module.exports = router; // export default router;