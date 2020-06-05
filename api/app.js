import express from 'express';

import userRoutes from './routes/user.js'
import albumRoutes from './routes/album.js'
import trackRoutes from './routes/track.js'
import countryRoutes from './routes/country.js'

import exercises from './controllers/excercises.js';

const app = express();

//TODO: all routes
app.use('/albums', albumRoutes);
app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);
app.use('/countries', countryRoutes);

app.use('/exercises/:number', exercises);


export default app;