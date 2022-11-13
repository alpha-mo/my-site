import nodemailer from "nodemailer";
import { config } from 'dotenv'
import { confirmHtml, incomingHtml } from "./msg.js";
config()

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.PORTFOLIO_SENDER, // generated ethereal user
        pass: process.env.PORTFOLIO_SENDER_PASSWORD, // generated ethereal password
    },
});

console.log(transporter);

// async..await is not allowed in global scope, must use a wrapper
export const sendMail = async (name, email, message) => {
    console.log('send mail called');
    // send mail with defined transport object
    let confRes = await transporter.sendMail({
        from: `"M. Ojail" <${process.env.CONTACT_SENDER}>`, // sender address
        to: email, // list of receivers
        subject: "noreply/confirmation", // Subject line
        html: confirmHtml(name, message), // html body
    });

    let incomRes = await transporter.sendMail({
        from: `${name} <${email}>`, // sender address
        to: process.env.CONTACT_SENDER, // list of receivers
        subject: "Incoming contact ✔", // Subject line
        html: incomingHtml(name, message), // html body
    });

    console.log("Confirmation result:\n", confRes);
    console.log("Incoming result:\n", incomRes);
    return { success: true }
}
