import {pool} from '../config/db.config';

export const getAllUsers = async () => {
    const {rows} = await pool.query('SELECT * FROM Users order by id asc');
    return rows;
}
