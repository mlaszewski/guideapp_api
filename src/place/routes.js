const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API PLACES
router.get("/", controller.getPlaces); // returns list of places
router.get("/:id", controller.getPlaceById); // returns place with $id
router.post("/", controller.addPlace); // adds place record
router.delete("/:id", controller.removePlace); // deletes place with $id
router.put("/:id", controller.updatePlace); // updates place information (name, lastname)

module.exports = router;