const { DataTypes } = require('sequelize');


module.exports = (database) => {
    database.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        difficulty: {
            type: DataTypes.INTEGER
        },
        duration_hours: {
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.ENUM,
            values: ['winter', 'spring', 'summer', 'autumn']

        },
    });

    
}