const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API OFFERS
router.get("/:id", controller.getOfferById); // returns offer with $id
router.post("/", controller.addOffer); // adds offer record
router.delete("/:id", controller.removeOffer); // deletes offer with $id
router.get("/guide/:id", controller.getGuideOffers); // returns a list of offers of guide with $id

module.exports = router;