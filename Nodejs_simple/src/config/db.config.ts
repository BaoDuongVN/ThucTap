import {Pool} from 'pg';
require('dotenv').config()

// export const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432
// })

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    // max: 10,
    // idleTimeoutMillis: 30000,
    // connectionTimeoutMillis: 2000
})