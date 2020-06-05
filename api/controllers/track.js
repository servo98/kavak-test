import TrackService from '../services/track.js';

const trackService = new TrackService();

export async function index(req, res) {
    try {
        const {limit, offset, sortBy, orderBy} = req.query;
        const tracks = await trackService.index({limit, offset, sortBy, orderBy});
        return res.json({tracks});
    } catch (error) {
        return res.json({error});
    }
}

export async function create(req, res) {
    try {
        const track = await trackService.create(req.body);
        return res.json({track});
    } catch (error) {
        return res.json({error});
    }
}

export async function update(req, res) {
    try {
        const track = await trackService.update(req.params.id, req.body);
            return res.json({track});
    } catch (error) {
        return res.json({error});
    }
}

export async function destroy(req, res) {
    try {
        const track = await trackService.destroy(req.params.id);
        return res.json({track});
    } catch (error) {
        return res.json({error});
    }
}