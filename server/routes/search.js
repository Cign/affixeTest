var express = require('express');
var router = express.Router();
var {serviceSearch} = require('../services/service');

/* GET match for the term in categories collection. */
router.get('/category/:term', serviceSearch, (req,res,next) => res.json(res.data));

module.exports = router;