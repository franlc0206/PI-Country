var express = require('express');
const axios = require('axios');
var sequelize = require('sequelize');

var router = express.Router();
var { Country, Activity, country_activity} = require('../db');
const {getAllCountries, getById} = require('../controllers/countries')
module.exports = router;

router.get('/', getAllCountries)

router.get('/:idPais', getById)
