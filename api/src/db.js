require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_ROUTE  } = process.env;

const CountryMod = require('./models/Country');
const ActivityMod = require('./models/Activity')

const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_ROUTE}`, 
    {logging: false }
);

CountryMod( database );
ActivityMod( database );

const { Country, Activity } = database.models;

Country.belongsToMany(Activity, { through: "CountriesActivities"});
Activity.belongsToMany(Country, { through: "CountriesActivities"});














module.exports = {
    database,
    ...database.models,
    };
