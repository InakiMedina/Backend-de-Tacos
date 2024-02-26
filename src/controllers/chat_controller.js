const {
    loremIpsum
} = require("lorem-ipsum");

module.exports = {

    getMessage: (req, res) => {
        msg = loremIpsum()

        res.status(200).send({
            status: 'success',
            message: msg
        })
    }
}