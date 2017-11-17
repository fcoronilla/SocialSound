var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Place = require('../models/Place.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET ALL places */
router.get('/', function (req, res, next) {
    Place.find(function (err, places) {
        if (err) return next(err);
        res.json(places);
    });
});

/* GET Place BY ID */
router.get('/:id', function (req, res, next) {
    Place.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* CREATE Place */
router.post('/', function (req, res, next) {
    Place.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Place BY ID */
router.put('/:id', function (req, res, next) {
    Place.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Place BY ID */
router.delete('/:id', function (req, res, next) {
    Place.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;