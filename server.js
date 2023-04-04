'use strict';

const express = require('express');
const capitalize = require('./capitalize/capitalize');
const cors = require('cors');

const app = express(); // <--- singleton

app.use(cors());

app.get('/capitalize-me', function(req, res, next) {
    if (req.query.message) {
        let capResult = capitalize(req.query.message);
        res.send(capResult);
    } else {
        res.send('Please attach a message');
    }
});

module.exports = app;