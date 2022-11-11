
import express from 'express'
import sendMail from '../controller/mailController'

const router = express.Router();

router.post('/contact', sendMail);

module.exports = router;
