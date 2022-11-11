
var path = require('path');

const testServer = (req, res) => {
    const incoming = {
        path: req.path,
        host_name: req.hostname
    }
    console.log(incoming);
    try {
        res.status(200)
            .sendFile('alive.html', { root: path.join(__dirname, '../serverAppPages') })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}

const sendInstructions = (req, res) => {
    const incoming = {
        path: req.path,
        host_name: req.hostname
    }
    console.log(incoming);
    try {
        res.status(200)
            .sendFile('instructions.html', { root: path.join(__dirname, '../serverAppPages') })
    } catch (error) {
        res.status(400).json({
            error: "instructions page not found."
        })
    }
}

module.exports = {
    testServer,
    sendInstructions
}