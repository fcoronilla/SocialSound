module.exports = require('express')
    .Router()
    .get('/', (req, res, next) =>
    res.sendFile(path.join(__dirname + '/dist/index.html')));