import Sequelize from 'sequelize';

import { sequelize } from '../utils/database.js';

export default class User extends Sequelize.Model { }
User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    countrycode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
});
