import express from 'express';
import * as AlbumController from '../controllers/album.js';

const router = express.Router();

router.route('/')
    .get(AlbumController.index)
    .post(AlbumController.create);

export default router;