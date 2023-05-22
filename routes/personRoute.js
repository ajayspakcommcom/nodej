const express = require('express');
const router = express.Router();

const controller = require('../controller/personController');

router.get('/person-list', controller.getPersonList);
router.post('/person-add', controller.postPersonData);

module.exports = router;