const { Activity, Country } = require('../db')


const getActivity =  ( ) => {
    try {
        const activities = Activity.findAll();
        return activities;
    } catch (error) {
        throw new Error( error );
    }
}
const createActivity = async (activity, countryId) => {

    const { name, difficulty, duration_hours, season } = activity;

    const newActivity = await Activity.create({
        name,
        difficulty,
        duration_hours,
        season,
    });

    const country = await Country.findByPk(countryId);
    if (!country) {
        throw new Error(`Country with ID ${countryId} not found`);
    }

    await newActivity.addCountry(country);

    return newActivity;
}
    

module.exports = {
    getActivity,
    createActivity
    
    };