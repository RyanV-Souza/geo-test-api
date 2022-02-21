const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')

router.get('/', controller.get);

module.exports = router;