import * as Excercise from '../utils/exercises.js';
import { sequelize } from '../utils/database.js';

export default async (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number) || number < 1 || number > 6) {
        return res.json({ error: 'param must be a number between 1 and 6' });
    }

    const querys = Excercise['exercise' + number]();

    const queryPromises = await Promise.all(querys.map(async ({query, type}) => {
        return sequelize.query(query, {type: sequelize.QueryTypes[type]});
    }));

    return res.json({ results: queryPromises });
}