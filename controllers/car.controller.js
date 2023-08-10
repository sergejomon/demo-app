const express = require("express");
const router = express.Router();
const service = require("../services/car.service");

router.get("/", async (req, res) => {
    const cars = await service.getAllCars();
    res.send(cars);
});

router.get("/:id", async (req, res) => {
    const car = await service.getCarById(req.params.id);
    res.send(car);
});

router.delete("/:id", async (req, res) => {
    await service.deleteCarById(req.params.id);
    res.sendStatus(204);
});

router.post("/", async (req, res) => {
    const newCar = await service.createCar(req.body);
    res.send(newCar);
});

router.put("/:id", async (req, res) => {
    const updatedCar = await service.updateCar(req.params.id, req.body);
    res.send(updatedCar);
});

module.exports = router;
