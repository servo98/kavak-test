import AlbumService from '../services/album.js';

const albumService = new AlbumService();

export async function index(req, res) {
    try {
        const {limit, offset, sortBy, orderBy} = req.query;
        const albums = await albumService.index({limit, offset, sortBy, orderBy});
        return res.json({albums});
    } catch (error) {
        console.log(error);
        return res.json({error});
    }
}

export async function create(req, res) {
    try {
        const album = await albumService.create(req.body);
        return res.json({album});
    } catch (error) {
        return res.json({error});
    }
}

export async function update(req, res) {
    try {
        const album = await albumService.update(req.params.id, req.body);
            return res.json({album});
    } catch (error) {
        return res.json({error});
    }
}

export async function destroy(req, res) {
    try {
        const album = await albumService.destroy(req.params.id);
        return res.json({album});
    } catch (error) {
        return res.json({error});
    }
}