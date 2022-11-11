import dotenv from 'dotenv'
import { handler } from './portfolio/build/handler.js'
import express from 'express'

import { appRouter } from './routes/appRoutes.js';
import { mailRouter } from './routes/mailRoutes.js'
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

// manage http requests to the API
app.get('/info', (req, res) => {
    res.status(200).json({
        Server_Test: {
            Method: 'GET',
            Request_URL: 'https://ojail.se/api/app/test'
        },
        Server_Status: {
            Method: 'GET',
            Request_URL: 'https://ojail.se/api/app/info'
        },
        Contact_Function: {
            Method: 'POST',
            Request_URL: 'https://ojail.se/api/server/contact',
            Request_Body_example: {
                "name": "sender name",
                "message": "this is a message!",
                "email": "bla.bla@foo.org"
            }
        }
    })
})
app.use('/api/app', appRouter);
app.use('/api/server', mailRouter);
