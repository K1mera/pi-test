const { Country } = require("../db");
const axios = require("axios");
const { Op } = require('sequelize')


const getAllCountries = async () => {
  const allCountries = await Country.findAll()
  return allCountries;
}
const getCountries = async () => {
  const checkDb = await Country.findAll()
  if ( checkDb.length !== 0 ) {
    return checkDb
  } 
  const response = await axios.get("https://restcountries.com/v3/all");
  const countryData = response.data;

  // Convert the country data object to an array of objects
  const countries = countryData.map((key) => {
    if (!key.capital) key.capital = "No capital";
    return {
      id: key.cca3, // Assuming 'key' represents the country code or ID
      name: key.name.common,
      flag_image_url: key.flags[1],
      continent: key.region,
      capital: key.capital[0],
      subregion: key.subregion,
      area: key.area,
      population: key.population,
    };
  });
  const savedCountries = await Country.bulkCreate(countries);
  // console.log(savedCountries);
  return savedCountries;
};

const getCountryById = async (id) => {
  const country = await Country.findByPk(id);
  return country;
};

const getCountryByName = async (name) => {
  try {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + name + "%",
        },
      },
    });

    return countries;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getCountries,
  getCountryById,
  getCountryByName,
  getAllCountries
};
