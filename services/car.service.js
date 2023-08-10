const Car = require('../models/Car');

//using Sequelize prevent SQL injection
module.exports = {
    getAllCars: () => Car.findAll(),

    getCarById: (id) => Car.findByPk(id),

    deleteCarById: (id) => Car.destroy({ where: { id } }),

    createCar: (obj) => {
        const { brand, color } = obj;
        return Car.create({ brand, color });
    },

    updateCar: async (id, obj) => {
        const { brand, color } = obj;
        Car.update({ brand, color }, { where: { id } });
        return Car.findByPk(id);
    }
};