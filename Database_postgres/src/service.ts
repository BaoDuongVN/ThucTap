import {pool} from './pool'

export const getName = async () => {
    const result = await pool.query(`select * from Employees where first_name = 'James'`);
    return result.rows;
}

export const updateEmployee = async (employee_id: number, first_name: string) => {
    try {
        const result = await pool.query(`UPDATE employees SET first_name = '${first_name}' WHERE employee_id = ${employee_id};`);
        return 'success';
    } catch (error) {
        return 'error';
    }
};