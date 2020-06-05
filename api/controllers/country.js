import {Country} from '../models/models.js';

export async function index(req, res) {
    const countries = await Country.findAll();
    return res.json(countries);
}

export function create(req, res) {
    return res.json('create desde album');
}