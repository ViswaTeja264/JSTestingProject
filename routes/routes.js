const express = require('express')
const router = express.Router();
const { runCypressTests } = require('../controllers/controller');

router.route('/').post(runCypressTests);

module.exports = router;