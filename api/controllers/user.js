import UserService from '../services/user.js';

const userService = new UserService();

export async function index(req, res) {
    try {
        const {limit, offset, sortBy, orderBy} = req.query;
        const users = await userService.index({limit, offset, sortBy, orderBy});
        return res.json({users});
    } catch (error) {
        return res.json({error});
    }
}

export async function create(req, res) {
    try {
        const user = await userService.create(req.body);
        return res.json({user});
    } catch (error) {
        return res.json({error});
    }
}

export async function update(req, res) {
    try {
        const user = await userService.update(req.params.id, req.body);
            return res.json({user});
    } catch (error) {
        return res.json({error});
    }
}

export async function destroy(req, res) {
    try {
        const user = await userService.destroy(req.params.id);
        return res.json({user});
    } catch (error) {
        return res.json({error});
    }
}