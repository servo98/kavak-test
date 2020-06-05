import express from 'express';
import bodyParser from 'body-parser';

//Import models routes
import userRoutes from './routes/user.js'
import albumRoutes from './routes/album.js'
import trackRoutes from './routes/track.js'
import countryRoutes from './routes/country.js'


import exercises from './controllers/excercises.js';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

//TODO: all routes
app.use('/exercises/:number', exercises);

app.use('/albums', albumRoutes);
app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);
app.use('/countries', countryRoutes);



export default app;