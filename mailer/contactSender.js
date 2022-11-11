
import path from 'path'

const opt = {
    from: `"contact!"<${process.env.PORTFOLIO_SENDER}>`,
    to: process.env.CONTACT_SENDER,
    subject: "from my portfolio!",
    text: '',
    template: "get",
    attachments: [
        {
            filename: "logo-sig.png",
            // path: path.join(__dirname, "../public/images/logo-sig.png"),
            path: path.parse('../public/images/logo-sig.png'),
            cid: "logo-sig", //same cid value as in the html img src
        },
        {
            filename: "logo.png",
            // path: path.join(__dirname, "../public/images/logo.png"),
            path: path.parse('../public/images/logo.png'),
            cid: "logo", //same cid value as in the html img src
        },
    ],
    context: {
        ima: "cid:logo-sig",
        ima_up: "cid:logo",
        name: '',
        sender: '',
        message: '',
    },
};

export const sendContact = async (req, transporter) => {

    const { name, email, message } = req.body;
    opt.text = message;
    opt.context.name = name;
    opt.context.sender = email;
    opt.context.message = message;

    return await transporter.sendMail(opt)
        .then(() => {
            return true
        })
        .catch(err => {
            console.error(err)
            return false
        });
}

// module.exports = sendContact;