const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API USERS
router.get("/", controller.getUsers); // returns list of registered users
router.get("/:id", controller.getUsersById); // returns user with $id
router.put("/:id", controller.updateUser); // updates user information (name, lastname)
router.delete("/", controller.removeUser); // deletes user with $id account

// API AUTH
router.post("/register", controller.addUser); // registers user
router.post("/login", controller.authenticateUser); // logs in user
router.post("/logout", controller.logoutUser); // logs out user

module.exports = router;