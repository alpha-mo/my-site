
const express = require('express');
const sendMail = require('../controller/mailController')

const router = express.Router();

router.post('/contact', sendMail);

module.exports = router;
