import { config } from 'dotenv'
import { handler } from './portfolio/build/handler.js'
import express from 'express'

import { sendMail } from './mailer.js'
import fs from 'fs';
import https from 'https';

config()

console.log('configured');

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

// app.use(handler);

app.post('/api/server/contact', async (req, res) => {
    console.log('Called');
    const { name, email, message } = req.body
    console.log(name, email, message);
    let err = false;
    await sendMail(name, email, message).catch((x) => {
        console.log(x);
        err = true
    })
    if (err) {
        res.status(500).json({ err })
    } else {
        res.status(200).json({ success: true })
    }
});
