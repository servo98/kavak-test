import Sequelize from 'sequelize';

import config from '../config/app.js';

const { database } = config;

const sequelize = new Sequelize(database.name, database.user, database.pass, {
    host: database.host,
    dialect: database.driver,
    define: {
        timestamps: database.timestamps
    },
});

// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

export { sequelize };
