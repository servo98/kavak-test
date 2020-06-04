import express from 'express';
import * as UserController from '../controllers/user.js';

const router = express.Router();

router.route('/')
    .get(UserController.index)
    .post(UserController.create);

export default router;