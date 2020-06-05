import express from 'express';
import * as AlbumController from '../controllers/album.js';
//import middlewares
import pagination from '../middlewares/pagination.js';
import ordering from '../middlewares/ordering.js';

const router = express.Router();

router.route('/')
    .get([pagination, ordering], AlbumController.index)
    .post(AlbumController.create);

router.route('/:id')
    .put(AlbumController.update)
    .delete(AlbumController.destroy);

export default router;