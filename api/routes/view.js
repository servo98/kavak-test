import express from 'express';
import * as ViewController from '../controllers/view.js';

import pagination from '../middlewares/pagination.js';
import ordering from '../middlewares/ordering.js';

const router = express.Router();

router.route('/')
    .get([pagination, ordering], ViewController.index);

export default router;