import express from 'express';

//Import models routes
import userRoutes from './routes/user.js'
import albumRoutes from './routes/album.js'
import trackRoutes from './routes/track.js'
import countryRoutes from './routes/country.js'

//import middlewares
import pagianton from './middlewares/pagination.js';
import ordering from './middlewares/ordering.js';

import exercises from './controllers/excercises.js';

const app = express();

//TODO: all routes
app.use('/exercises/:number', exercises);

app.use([pagianton, ordering]);
app.use('/albums', albumRoutes);
app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);
app.use('/countries', countryRoutes);



export default app;