import Album from './album.js';
import User from './user.js';
import Country from './country.js';
import Track from './track.js';

Album.belongsTo(User);
User.hasMany(Album, {foreignKey: 'userid'});

Track.belongsTo(User);
User.hasMany(Track, {foreignKey: 'userid'});

Track.belongsTo(Album);

export {Album, User, Country, Track}