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
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    countrycode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
});
