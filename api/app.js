import express from 'express';

import userRoutes from './routes/user.js'
import albumRoutes from './routes/album.js'
import trackRoutes from './routes/track.js'
import countryRoutes from './routes/country.js'



const app = express();

//TODO: all routes
app.use('/albums', albumRoutes);
app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);
app.use('/countries', countryRoutes);


export default app;