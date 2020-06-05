import express from 'express';
import * as TrackController from '../controllers/track.js';

const router = express.Router();

router.route('/')
    .get(TrackController.index)
    .post(TrackController.create);

export default router;