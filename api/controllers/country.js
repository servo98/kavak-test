import CountryService from '../services/country.js';

const countryService = new CountryService();

export async function index(req, res) {
    try {
        const {limit, offset, sortBy, orderBy} = req.query;
        const countrys = await countryService.index({limit, offset, sortBy, orderBy});
        return res.json({countrys});
    } catch (error) {
        return res.json({error});
    }
}

export async function create(req, res) {
    try {
        const country = await countryService.create(req.body);
        return res.json({country});
    } catch (error) {
        return res.json({error});
    }
}

export async function update(req, res) {
    try {
        const country = await countryService.update(req.params.id, req.body);
            return res.json({country});
    } catch (error) {
        return res.json({error});
    }
}

export async function destroy(req, res) {
    try {
        const country = await countryService.destroy(req.params.id);
        return res.json({country});
    } catch (error) {
        return res.json({error});
    }
}