const express = require('express');
const { sendInstructions, testServer } = require('../controller/appController')

const router = express.Router();

router.get('/test', testServer);
router.get('/info', sendInstructions);

module.exports = router;