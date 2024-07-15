const express = require('express');
const { signup, login, confirmEmail } = require('../Controllers/authcontrollers');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/confirm/:id',confirmEmail)

module.exports = router;
