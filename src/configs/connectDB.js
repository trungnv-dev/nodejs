// import mysql from 'mysql2'
import mysql from 'mysql2/promise'
import 'dotenv/config'

// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodejsbasic'
// });

// create the pool connection to database
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    database: process.env.DB_DATABASE || 'nodejsbasic'
});

export default pool;
