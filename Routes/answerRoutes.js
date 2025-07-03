const express = require('express');
const router = express.Router();
const {getAnswersByQuestionId,postAnswerForQuestion} = require('../controllers/answerController');
const authMiddleware = require('../middlewaree/authMiddleware');


// Router to get ansers for a specific question
router.get('/answer/:question_id', getAnswersByQuestionId);


// Router to Post an answer
router.post('/answer',authMiddleware,postAnswerForQuestion);



module.exports = router;