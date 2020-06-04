import Sequelize from 'sequelize';

import config from '../config/app.js';

const {database} = config;

export function connect() {
    return new Sequelize(database.name, database.user, database.pass, {
        host: database.host,
        dialect: database.driver
    });
}
