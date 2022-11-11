
import path from 'path'

const opt = {
    from: `"Mohamad Ojail"<${process.env.CONTACT_SENDER}>`,
    to: '',
    subject: "Confirmation",
    text: "Your message has been received, I will get back to you soon!",
    template: "confirm",
    attachments: [
        {
            filename: "logo-sig.png",
            path: path.join(__dirname, "../public/images/logo-sig.png"),
            cid: "logo-sig", //same cid value as in the html img src
        },
        {
            filename: "logo.png",
            path: path.join(__dirname, "../public/images/logo.png"),
            cid: "logo", //same cid value as in the html img src
        },
    ],
    context: {
        ima: "cid:logo-sig",
        ima_up: "cid:logo",
        name: '',
        message: '',
    },
};

const sendReply = async (req, transporter) => {

    const { name, email, message } = req.body;
    opt.to = email;
    opt.context.name = name;
    opt.context.message = message;

    return await transporter.sendMail(opt)
        .then(() => {
            return true
        })
        .catch(err => {
            console.log(err);
            return false
        });
}

module.exports = sendReply;