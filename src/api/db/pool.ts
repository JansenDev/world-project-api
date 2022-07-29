import { Pool } from "pg";



const pool = new Pool({
    host: process.env.WP_DB_HOST || 'localhost',
    port: 5432,
    database: process.env.WP_DB || 'world_project_db',
    user: process.env.WP_DB_USER || 'postgres',
    password: process.env.WP_DB_PASSWORD || '12345'
})

pool.query("SELECT * FROM test")
    .then(_ => console.log('DB Connect! '))
    .catch(err => console.log(err))
console.log("conectado");



export default pool



