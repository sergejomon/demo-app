const { Sequelize } = require('sequelize');
require('dotenv').config();

const connectDb = new Sequelize("garage", "root", process.env.db_password, {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connectDb;
