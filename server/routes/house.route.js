var express = require('express');
var router  = express.Router();
var controller = require('../controllers/house.controller.js')

// GET all questions
router.get('/', controller.showHouseList)
router.post('/add', controller.createHouseList)
router.put('/:id', controller.updateCreateList)
router.delete('/:id', controller.deleteCreateList)

module.exports = router;
