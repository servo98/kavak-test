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

export function create(req, res) {
    return res.json('create desde album');
}

export function update(req, res) {

}

export function destroy(req, res) {

}