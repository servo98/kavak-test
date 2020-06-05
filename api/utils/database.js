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

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.query(
    `CREATE OR REPLACE VIEW TRACKS_FULL_DATA AS SELECT
        t.id as track_id,
        t.title as track_title,
        a.title as album_title,
        u.email as user_mail,
        c.name as country_name
        FROM
            tracks as t,
            users as u,
            country as c,
            albums as a 
        WHERE  
            t.albumid = a.id
            AND t.userid = u.id
            AND u.countrycode = c.code
`)
.then(result => {
    console.log(result)
})
.catch(err => {
    console.error(err)
});

export { sequelize };
