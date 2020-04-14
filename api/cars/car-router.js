const express = require("express");

const db = require("../../data/dbConfig.js");

const router = express.Router();

// /api/cars
router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "error retrieving cars", err });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;

  db("cars")
    .insert(carData)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to add new car", err });
    });
});

module.exports = router;
