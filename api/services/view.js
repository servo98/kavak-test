import { sequelize } from '../utils/database.js';
import config from '../config/app.js';
export default class {
    constructor(){
        this.view_name = config.database.exerciseView;
    }

    async index(args = {}) {
        const { limit = 100, offset = 0, sortBy = 'id', orderBy = 'DESC' } = args;
        const view = await this.viewExists();
        if(!view){
            throw 'La vista no ha sido creada, ejecute el ejercicio 1 con la ruta /exercises/1'
        }
        return await sequelize.query(this.getFixedQuery({
                limit,
                offset,
                sortBy,
                orderBy
            }),
            {type: 'SELECT'}
        );
    }

    async viewExists(){

        const views =  await sequelize.query(`SHOW FULL TABLES IN ${config.database.name}  WHERE TABLE_TYPE LIKE '%VIEW%';`, {
            type: 'SHOWTABLES'
        });
        if(Array.isArray(views) && views.length >= 0){
            return views.includes(this.view_name);
        }
        return false;
    }

    getFixedQuery(params) {
        return `
            SELECT * FROM ${this.view_name} ORDER BY ${params.sortBy} ${params.orderBy} LIMIT ${params.limit} OFFSET ${params.offset}
        `;
    }
}
