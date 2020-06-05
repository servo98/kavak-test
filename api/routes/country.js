import express from 'express';
import * as CountryController from '../controllers/country.js';

import pagination from '../middlewares/pagination.js';
import ordering from '../middlewares/ordering.js';

const router = express.Router();

router.route('/')
    .get([pagination, ordering], CountryController.index)
    .post(CountryController.create);

router.route('/:id')
    .put(CountryController.update)
    .delete(CountryController.destroy);

export default router;