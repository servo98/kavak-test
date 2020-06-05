//FIXME 
import { sequelize } from '../utils/database.js';
export default class {

    constructor(model) {
        this.model = model;
    }

    async index(args = {}) {
        const { limit = 100, offset = 0, sortBy = 'id', orderBy = 'DESC' } = args;
        return await sequelize.query(this.getFixedQuery({
                limit,
                offset,
                sortBy,
                orderBy
            }),
            {type: 'SELECT'}
        );
    }

    async create(args) {
        return  await this.model.create(args);
    }

    async update(id, args) {
        return await this.model.update(args, {where: {id}});
    }

    async destroy(id) {
        return await this.model.destroy({where: {id}});
    }

    getFixedQuery(params) {
        return `
            SELECT * FROM ${this.model.getTableName()} ORDER BY ${params.sortBy} ${params.orderBy} LIMIT ${params.limit} OFFSET ${params.offset}
        `;
    }
}