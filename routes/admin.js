const express = require('express');
const router = express.Router();

const controller = require('../controller/admin');

router.get('/admin-report', controller.getAdminReport);

module.exports = router;


/**
 *  get doctor list
 *  get doctor profile
 *  save medicine report
 * 
 */