const express = require('express');
const router = express.Router();

const HomeController = require('./HomeController');

router.use('/', HomeController);

module.exports = router;