import express, {Application, Express} from 'express';
import {getAllUsers, createNewUser} from '../Controller/APIController';

const router = express.Router();

const initAPI = (app: Application) => {
    router.get('/users', getAllUsers);
    return app.use('/api/v1/', router);
}

const initAPINewUser = (app: Express) => {
    return app.post('/new_users', createNewUser);
}

// export default initAPI;
export default initAPINewUser;