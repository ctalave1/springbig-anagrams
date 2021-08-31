const express = require('express');
const routes = require('./routes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/anagrams', routes.v1.anagrams);
app.use('/v2/anagrams', routes.v2.anagrams);

module.exports = app;