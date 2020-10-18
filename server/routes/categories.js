var express = require('express');
var router = express.Router();
var {serviceReadCategory, collCat, serviceSearch, serviceCountArticles } = require('../services/service');

/* GET categories listing. */
router.get('/', collCat, (req,res,next) => { res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With"); res.json(res.data)});

/* GET single category. */
router.get('/doc/:doc', serviceReadCategory, (req,res,next) => res.json(res.data));

/* GET number of articles for a category. */
router.get('/article/count/:doc', serviceCountArticles, (req,res,next) => res.json(res.data));

/* POST single category. */
router.post('search/:txt', serviceSearch, (req,res,next) => res.json(res.data));

module.exports = router;
