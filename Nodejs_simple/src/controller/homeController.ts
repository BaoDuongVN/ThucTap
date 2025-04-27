import {Request, Response} from 'express';
import { checkTimeUsers } from '../services/db.services';
import { pool } from '../config/db.config';
import { getAllUsers } from '../services/CRUD.serivces';

export const getHomepage = async (req: Request, res: Response) => {
    const result = await getAllUsers();
    return res.render('home.ejs', {listUsers: result}); // x < -y
}

export const getABC = (req: Request, res: Response): void => {
    res.send("check ABC");
}

export const getMeo = (req: Request, res: Response): void => {
    res.render('sample.ejs');
}

export const getUsersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await checkTimeUsers(req, res);
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const postCreateUser = async (req: Request, res: Response) => {
    const { email, name, city } = req.body;
    const {rows} = await pool.query('INSERT INTO Users (email, name, city) VALUES ($1, $2, $3)', [email, name, city]);
    if (res.status(200)) {
        res.send('User created successfully!');
    }
}

export const testES7 = async (req: Request, res: Response): Promise<void> => {
    const {rows} = await pool.query('SELECT * FROM Users');
    console.log('results:', rows);
}

export const getUpdateUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const {rows} = await pool.query('SELECT * FROM Users WHERE id = $1', [userId]);

    const user = rows && rows.length > 0 ? rows[0] : null;
    res.render('update.ejs', {userEdit: user});
}

export const getCreatePage = (req: Request, res: Response): void => {
    res.render('create.ejs');
}

export const postUpdateUser = async (req: Request, res: Response) => {
    const { userId, email, name, city } = req.body;
    const {rows} = await pool.query('Update users SET email = $1, name = $2, city = $3 where id = $4 RETURNING *', [email, name, city, userId]);
    res.status(200).send('Update user successfully!');
}

export const postDeleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const {rows} = await pool.query('DELETE FROM users WHERE id = $1 returning *', [userId]);
    const user = rows && rows.length > 0 ? rows[0] : null;
    res.render('delete.ejs', {userEdit: user});
}

export const postHandleRemoveUser = async (req: Request, res: Response) => {
    res.status(200).send('Delete user successfully!');
}