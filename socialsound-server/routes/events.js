var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Event = require('../models/Event.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET ALL events */
router.get('/', function (req, res, next) {
    Event.find(function (err, events) {
        if (err) return next(err);
        res.json(events);
    });
});

/* GET Event BY ID */
router.get('/:id', function (req, res, next) {
    Event.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* CREATE Event */
router.post('/', function (req, res, next) {
    Event.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Event BY ID */
router.put('/:id', function (req, res, next) {
    Event.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Event BY ID */
router.delete('/:id', function (req, res, next) {
    Event.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;