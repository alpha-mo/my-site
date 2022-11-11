const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
var path = require('path');
const sendContact = require('./contactSender');
const sendReply = require('./replySender')

const contact_transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.PORTFOLIO_SENDER,
        pass: process.env.PORTFOLIO_SENDER_PASSWORD,
    },
});

contact_transporter.use("compile", hbs({
    viewEngine: "express-handlebars",
    viewPath: path.join(__dirname, '../views')
}));

const portfolio_sender = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.CONTACT_SENDER,
        pass: process.env.CONTACT_SENDER_PASSWORD,
    },
});

portfolio_sender.use("compile", hbs({
    viewEngine: "express-handlebars",
    viewPath: path.join(__dirname, '../views')
}));

const emailParties = async (req) => {
    const contactResult = await sendContact(req, contact_transporter);
    const replyResult = await sendReply(req, portfolio_sender);
    return {
        contact_ok: contactResult,
        confirm_ok: replyResult
    }
}

module.exports = emailParties;