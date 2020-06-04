import Sequelize from 'sequelize';

import { sequelize } from '../utils/database.js';

export default class Album extends Sequelize.Model { }
Album.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    artist: {
        type: Sequelize.STRING,
        allowNull: true
    },
    label: {
        type: Sequelize.STRING,
        allowNull: true
    },
    upc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: true
    },
    userid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Album',
    tableName: 'albums',
    timestamps: false
});
