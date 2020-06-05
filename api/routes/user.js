import express from 'express';
import * as UserController from '../controllers/user.js';

import pagination from '../middlewares/pagination.js';
import ordering from '../middlewares/ordering.js';

const router = express.Router();

router.route('/')
    .get([pagination, ordering], UserController.index)
    .post(UserController.create);

router.route('/:id')
    .put(UserController.update)
    .delete(UserController.destroy);

export default router;