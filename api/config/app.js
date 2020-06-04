import dotenv from 'dotenv';

dotenv.config();

export default {
    server : {
        port: process.env.PORT
    },
    database : {
        host : process.env.DB_HOST,
        pass : process.env.DB_PASS,
        user : process.env.DB_USER,
        name : process.env.DB_NAME,
        driver : process.env.DB_DRIVER
    }
}