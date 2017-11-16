var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Type = require('../models/Type.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET ALL types */
router.get('/', function (req, res, next) {
    Type.find(function (err, types) {
        if (err) return next(err);
        res.json(types);
    });
});

/* GET Type BY ID */
router.get('/:id', function (req, res, next) {
    Type.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* CREATE Type */
router.post('/', function (req, res, next) {
    Type.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Type BY ID */
router.put('/:id', function (req, res, next) {
    Type.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Type BY ID */
router.delete('/:id', function (req, res, next) {
    Type.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;