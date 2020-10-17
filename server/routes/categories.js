var express = require('express');
var router = express.Router();
var {serviceReadCategory, collCat, serviceSearch, serviceCountArticles } = require('../services/serviceDoc');

/* GET categories listing. */
router.get('/', collCat, (req,res,next) => res.json(res.data));

router.get('/test', function(req,res,next) {res.json("{'id': 1, 'test': 'yoo'}")});

/* GET single category. */
router.get('/doc/:doc', serviceReadCategory, (req,res,next) => res.json(res.data));

/* GET number of articles for a category. */
router.get('/article/count/:doc', serviceCountArticles, (req,res,next) => res.json(res.data));

/* POST single category. */
router.post('search/:txt', serviceSearch, (req,res,next) => res.json(res.data));

module.exports = router;
