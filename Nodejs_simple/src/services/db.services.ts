import {pool} from '../config/db.config';
import {Request, Response} from 'express';

export interface User {
    id: number;
    email: string;
    name: string;
    city: string;

}

export const checkTimeUsers = async (req: Request, res: Response): Promise<void> => {
    let totalExec = 0;
    for (let i = 0; i < 10000; i++) {
        const start = new Date().getTime();
        const client = await pool.connect();
        try {
            await client.query('SELECT * FROM users');
        } finally {
            client.release();
        }

        const end = new Date().getTime();
        totalExec += (end - start);
    }

    const averageExec = totalExec / 10000;
    if (res.status(200)) {
        res.json({
            message: 'ok', 
            averageExec: averageExec,
        });
    }
}