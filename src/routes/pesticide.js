const express = require('express');
const router = express.Router();
const pesticideController = require("../controllers/pesticideController");

router.get("/pesticides", pesticideController.index);

router.get("/pesticides/:id", pesticideController.show);

module.exports = router;