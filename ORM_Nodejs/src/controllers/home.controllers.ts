import {Request, Response} from 'express';
import {getAllUsers, createNewUser, updateUser, getUserByID, deleteUser} from '../services/CRUD.services';


// GET tables users 
export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const user = await getAllUsers();
        res.render('user.views.ejs', {listUsers: user});
    } catch (error) {
        res.status(500).send('Error fetching users' + error);
    }
}

// Get user by ID in Update.ejs
export const getUserByIDinUpdatePage = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const user = await getUserByID(id);
        res.render('update.views.ejs', {userList: user});
    } catch (error) {
        res.status(500).send('Error fetching users' + error);
    }
}

// Get user by ID in Delete.ejs
export const getUserByIDinDeletePage = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const user = await getUserByID(id);
        res.render('delete.views.ejs', {userList: user});
    } catch (error) {
        res.status(500).send('Error fetching users' + error);
    }
}

// Create new user
export const createNewUserController = async (req: Request, res: Response) => {
    try {
        const {email, name, city} = req.body;
        const newUser = await createNewUser(email, name, city);
        res.redirect('/user');
    } catch (error) {
        console.log('Error in creating new user')
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

// Update user
export const updateUserController = async (req: Request, res: Response) => {
    try {
        const {id, email, name, city} = req.body;
        const updatedUser = await updateUser(id, name, email, city);
        res.redirect('/user');
    } catch (error) {
        console.log('Error in updating user ', error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// Delete user 
export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const {id} = req.body;
        const deletedUser = await deleteUser(id);
        res.redirect('/user');
    } catch (error) {
        console.log('Error in deleting user ', error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}