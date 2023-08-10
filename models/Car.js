const {DataTypes} = require("sequelize");
const db = require("../config/db");

const Car = db.define('Car', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    brand: DataTypes.STRING,
    color: DataTypes.STRING,
}, {
    tableName: 'car',
    timestamps: false
});

module.exports = Car;