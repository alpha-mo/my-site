import { handler } from './portfolio/build/handler.js'
import express from 'express'
import { config } from "dotenv";
config()

import fs from 'fs';
import https from 'https';

// create the express app
const app = express();
const port = 443;

const credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/ojail.se/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/ojail.se/fullchain.pem', 'utf8')
};

const server = https.createServer(credentials, app);

// start listening
server.listen(port, () => {
    console.log('Listening on:', `http://localhost:${port}`);
});

app.use(express.json());

// set cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(handler);
