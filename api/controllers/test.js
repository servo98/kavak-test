import * as Models from '../models/models.js';

export default async function(req, res) {
    const data = await Models.Album.findAll();
    return res.json(data);
}