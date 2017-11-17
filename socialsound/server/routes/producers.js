var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Producer = require('../models/Producer.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET ALL producers */
router.get('/', function (req, res, next) {
    Producer.find(function (err, producers) {
        if (err) return next(err);
        res.json(producers);
    });
});

/* GET Producer BY ID */
router.get('/:id', function (req, res, next) {
    Producer.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* CREATE Producer */
router.post('/', function (req, res, next) {
    Producer.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Producer BY ID */
router.put('/:id', function (req, res, next) {
    Producer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Producer BY ID */
router.delete('/:id', function (req, res, next) {
    Producer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;