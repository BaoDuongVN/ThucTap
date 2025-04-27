import {pool} from '../config/database.config';

// Get all users
export const getAllUsers = async () => {
    try {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// Get all users by ID
export const getUserByID = async (id: number) => {
    try {
        const {rows} = await pool.query('SELECT * FROM users WHERE id = $1 ORDER BY id ASC', [id]);
        return rows[0];
    } catch (error) {
        console.error('Error fetching this user:', error);
        throw error;
    }
}

// Create a new user
export const createNewUser = async (email: string, name: string, city: string) => {
    try {
        const {rows} = await pool.query('INSERT INTO users (email, name, city) VALUES ($1, $2, $3)', [email, name, city])
        return rows[0];
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Update user
export const updateUser = async (id: number, name: string, email: string, city: string) => {
    try {
        const {rows} = await pool.query('UPDATE users SET name = $1, email = $2, city = $3 WHERE id = $4;', [name, email, city, id]);
        return rows[0];
    } catch (error) {
        console.log('Error updating users', error);
        throw error;
    }
}

// Delete user
export const deleteUser = async (id: number) => {
    try {
        const {rows} = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log('Error deleting user', error);
        throw error;
    }
}