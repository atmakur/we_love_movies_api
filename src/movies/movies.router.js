const express = require('express');
const router = express.Router();
const moviesController = require('../movies/movies.controller');
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router.route("/:movieId/theaters")
    .all(cors())
    .get(moviesController.listTheaters)
    .all(methodNotAllowed);

router.route("/:movieId/reviews")
    .all(cors())
    .get(moviesController.listReviews)
    .all(methodNotAllowed);

router.route("/:movieId")
    .all(cors())
    .get(moviesController.read)
    .all(methodNotAllowed);

router.route("/")
    .all(cors())
    .get(moviesController.list)
    .all(methodNotAllowed);

module.exports = router;