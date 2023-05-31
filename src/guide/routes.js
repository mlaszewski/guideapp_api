const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API Guides
router.post("/", controller.getUsers);

module.exports = router;