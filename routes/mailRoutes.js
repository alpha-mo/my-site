
import express from 'express'
import { sendMail } from '../controller/mailController.js'

export const mailRouter = express.Router();

mailRouter.post('/contact', sendMail);

// module.exports = router;
