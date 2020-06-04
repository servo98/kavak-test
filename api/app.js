import express from 'express';

import {connect} from './utils/database.js';

const app = express();

connect()
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//TODO: all routes


export default app;