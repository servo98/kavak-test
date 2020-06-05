import express from 'express';
import * as CountryController from '../controllers/country.js';

const router = express.Router();

router.route('/')
    .get(CountryController.index)
    .post(CountryController.create);

export default router;