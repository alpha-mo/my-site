import express from 'express'
import { sendInstructions, testServer } from '../controller/appController'

const router = express.Router();

router.get('/test', testServer);
router.get('/info', sendInstructions);

module.exports = router;