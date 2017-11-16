module.exports = require('express')
    .Router()
    .get('/', (req, res, next) => res.sendfile("./public/index.html"))