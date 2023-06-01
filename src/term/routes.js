const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// API TERMS
router.get("/:id", controller.getTermById); // returns term with $id
router.post("/", controller.addTerm); // adds term record
router.delete("/:id", controller.removeTerm); // deletes term with $id
router.get("/guide/:id", controller.getGuideTerms); // returns a list of terms of guide with $id

module.exports = router;