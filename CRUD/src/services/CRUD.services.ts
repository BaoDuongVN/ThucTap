import {pool} from '../config/database.config';

// Get all user
export const getAllUsers = async () => {
    try {
        const result = await pool.query('SELECT * FROM user');
        return result.rows;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

// Get all user by ID
export const getUserByID = async (id: number) => {
    try {
        const {rows} = await pool.query('SELECT * FROM user WHERE id = $1 ORDER BY id ASC', [id]);
        return rows[0];
    } catch (error) {
        console.error('Error fetching this user:', error);
        throw error;
    }
}


// Update user
export const updateUser = async (id: number, name: string, email: string, city: string) => {
    try {
        const {rows} = await pool.query('UPDATE user SET name = $1, email = $2, city = $3 WHERE id = $4;', [name, email, city, id]);
        return rows[0];
    } catch (error) {
        console.log('Error updating user', error);
        throw error;
    }
}

// // Delete user
export const deleteUser = async (id: number) => {
    try {
        const {rows} = await pool.query('DELETE FROM user WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log('Error deleting user', error);
        throw error;
    }
}