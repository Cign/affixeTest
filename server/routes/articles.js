var express = require('express');
var router = express.Router();
var {serviceReadArticle, collArt, serviceArticlesByCategory} = require('../services/serviceDoc');

/* GET articles listing. */
router.get('/', collArt, (req,res,next) => res.json(res.data));

router.get('/test', function(req,res,next) {res.json("{'id': 1, 'test': 'yoo'}")});

/* GET single article. */
router.get('/doc/:doc', serviceReadArticle, (req,res,next) => res.json(res.data));

/* GET all article in a category */
router.get('/category/:doc', serviceArticlesByCategory, (req,res,next) => res.json(res.data));

module.exports = router;