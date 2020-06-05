import Sequelize from 'sequelize';

import { sequelize } from '../utils/database.js';

export default class Country extends Sequelize.Model { }
Country.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Country',
    tableName: 'country',
    timestamps: false
});
