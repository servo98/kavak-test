import express from 'express';

import {connect} from './utils/database.js';

import userRoutes from './routes/user.js'
import albumRoutes from './routes/album.js'

connect();

const app = express();

//TODO: all routes
app.use('/album', albumRoutes);
app.use('/user', userRoutes);

export default app;