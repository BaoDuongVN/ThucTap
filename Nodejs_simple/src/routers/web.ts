import express from 'express';
import {getHomepage, getABC, getMeo, getUsersController, postCreateUser, 
    getCreatePage, testES7, getUpdateUser, postUpdateUser, postDeleteUser,
    postHandleRemoveUser} from '../controller/homeController'

const router = express.Router();

router.get('/', getHomepage); 
router.get('/abc', getABC);
router.get("/meo", getMeo);
router.get('/user', getUsersController)
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdateUser);
router.post('/create-user', postCreateUser);
router.get('/test', testES7)
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser);

module.exports = router; // expoert default router;