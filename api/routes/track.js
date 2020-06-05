import express from 'express';
import * as TrackController from '../controllers/track.js';

import pagination from '../middlewares/pagination.js';
import ordering from '../middlewares/ordering.js';

const router = express.Router();

router.route('/')
    .get([pagination, ordering], TrackController.index)
    .post(TrackController.create);

router.route('/:id')
    .put(TrackController.update)
    .delete(TrackController.destroy);

export default router;