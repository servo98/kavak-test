import dotenv from 'dotenv';

dotenv.config();

export default {
    server : {
        port: process.env.PORT || 3000
    },
    database : {
        host : process.env.DB_HOST || 'localhost',
        pass : process.env.DB_PASS || '',
        user : process.env.DB_USER || 'root',
        name : process.env.DB_NAME || 'bquate_test_musica',
        driver : process.env.DB_DRIVER || 'mysql',
        loggin : process.env.DB_LOGGIN || true
    }
}