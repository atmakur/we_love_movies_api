const express = require('express');
const router = express.Router();
const theaterController = require('../theaters/theaters.controller');
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router.route('/')
    .all(cors())
    .get(theaterController.list)
    .all(methodNotAllowed);

module.exports = router;