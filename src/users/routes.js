const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API USERS
router.get("/", controller.getUsers);
router.get("/:id", controller.getUsersById);
router.post("/", controller.addUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.removeUser);

module.exports = router;