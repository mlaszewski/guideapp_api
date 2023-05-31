const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API Guides
router.post("/", controller.createGuideProfile);
router.post("/:id", controller.getGuideById);

module.exports = router;