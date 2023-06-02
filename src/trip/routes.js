const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API TRIPS
router.get("/", controller.getUserTrips); // returns user with $id trips
router.get("/guide/:id", controller.getGuideTrips); // returns guide with $id trips
router.post("/", controller.addTrip); // adds offer record
router.delete("/:id", controller.removeTrip); // deletes offer with $id
router.get("/:id", controller.getTripById); // returns a list of offers of guide with $id

module.exports = router;