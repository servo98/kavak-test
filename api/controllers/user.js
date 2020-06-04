import {User} from '../models/models.js';

export async function index(req, res) {
    const users = await User.findAll();
    return res.json(users);
}

export function create(req, res) {
    return res.json('create desde user');
}