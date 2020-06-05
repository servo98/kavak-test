import ViewService from '../services/view.js';

const viewService = new ViewService();

export async function index(req, res) {
    try {
        const {limit, offset, sortBy, orderBy} = req.query;
        const views = await viewService.index({limit, offset, sortBy, orderBy});
        return res.json({views});
    } catch (error) {
        return res.json({error});
    }
}