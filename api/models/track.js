import Sequelize from 'sequelize';

import {sequelize} from '../utils/database.js';

export default class Track extends Sequelize.Model {}
Track.init({
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
    isrc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    albumid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'Album',
            key: 'id'
        }
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: true
    },
    userid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, {
  sequelize,
  modelName: 'Track',
  tableName: 'tracks'
});
