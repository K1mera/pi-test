require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_ROUTE  } = process.env;

const CountryMod = require('./models/Country');
const ActivityMod = require('./models/Activity')

const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`, 
    {logging: false }
);

CountryMod( database );
ActivityMod( database );

const { Country, Activity } = database.models;

// Country.hasMany( Activity, {
//     foreignKey: 'countryId', // This refers to the foreign key column in the Activity model.
//     allowNull: false, // This enforces that each activity must be associated with a country.
//     onDelete: 'CASCADE', // This will automatically delete associated activities when a country is deleted.
//   });

Activity.belongsTo( Country, {
    foreignKey: 'countryId', // This will create a foreign key column named 'countryId' in the Activity model.
    allowNull: false, // This enforces that each activity must be associated with a country.
  });

  Country.hasMany(Activity, { foreignKey: 'countryId', sourceKey: 'id' });













module.exports = {
    database,
    ...database.models,
    };
