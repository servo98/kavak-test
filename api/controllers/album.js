import {Album} from '../models/models.js';

export function index(req, res) {
    return res.json('index desde album');
}

export function create(req, res) {
    return res.json('create desde album');
}