const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API Guides
router.post("/", controller.createGuideProfile);
router.get("/:id", controller.getGuideById);
router.post("/:id", controller.toggleGuideToFav);


module.exports = router;