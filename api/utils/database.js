import Sequelize from 'sequelize';

import config from '../config/app.js';

const { database } = config;

const sequelize = new Sequelize(database.name, database.user, database.pass, {
    host: database.host,
    dialect: database.driver,
    define: {
        timestamps: database.timestamps
    },
    logging: database.logging
});

export { sequelize };
