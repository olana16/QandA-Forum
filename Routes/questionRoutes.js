const express = require("express");
const router = express.Router();
const {postQuestion,getAllQuestion,getSingleQuestion} = require('../controllers/questionController')
const authMiddleware = require("../middlewaree/authMiddleware");

// API endpoints
router.post("/question", authMiddleware, postQuestion);

router.get("/question",  getAllQuestion);

router.get("/question/:question_id", getSingleQuestion);

module.exports = router;