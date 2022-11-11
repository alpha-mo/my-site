import express from 'express'
import { sendInstructions, testServer } from '../controller/appController.js'

export const appRouter = express.Router();

appRouter.get('/test', testServer);
appRouter.get('/info', sendInstructions);

// module.exports = router;