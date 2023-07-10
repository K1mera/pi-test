const { DataTypes } = require('sequelize');


module.exports = ( database ) => {
    database.define('Country', {
    id: {
        type: DataTypes.CHAR(3),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    flag_image_url: {
        type: DataTypes.STRING(255),
        isUrl: true
    },
    continent: {
        type: DataTypes.STRING(255)
    },
    capital: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    subregion: {
        type: DataTypes.STRING(255)
    },
    area: {
        type: DataTypes.DECIMAL
    },
    population: {
        type: DataTypes.INTEGER
    },
});
}
