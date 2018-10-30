const express = require('express');
const router = express.Router();
const pesticideController = require("../controllers/pesticideController");

router.get("/pesticides", pesticideController.index);

module.exports = router;