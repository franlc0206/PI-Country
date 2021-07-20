var express = require('express');
const axios = require('axios');
var router = express.Router();
var { Country, Activity, country_activity} = require('../db');
const {postActivities, getActivites, getActById} = require('../controllers/activities.js')
module.exports = router;

router.post('/', postActivities)
router.get('/', getActivites)
router.get('/:id', getActById)