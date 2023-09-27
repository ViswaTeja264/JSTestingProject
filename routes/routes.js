const express = require('express')
const router = express.Router();
const { runCypressTests } = require('../controllers/CypressController');



router.route('/').post(runCypressTests);

module.exports = router;