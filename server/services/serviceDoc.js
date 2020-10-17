const {getCats, getCategoryDoc, getArticleDoc, getArts, countArticleDoc, getArticlesInCategory, getCategorySearch} = require('../firebase')

exports.serviceReadCategory = (req,res,next) => {
    getCategoryData(req).then(data => {
    res.data = data;
    next();
}).catch((err) => {
    throw err;
})}

async function getCategoryData(req){
    try{
        let docName = req.params.doc;
        return await getCategoryDoc(docName);
    }
    catch(err){
        throw err;
    }
}

exports.serviceReadArticle = (req,res,next) => {
    getArticleData(req).then(data => {
    res.data = data;
    next();
}).catch((err) => {
    throw err;
})}

async function getArticleData(req){
    try{
        let docName = req.params.doc;
        return await getArticleDoc(docName);
    }
    catch(err){
        throw err;
    }
}

exports.serviceCountArticles = (req,res,next) => {
    countArticles(req).then(data => {
        res.data = data;
        next();
    }).catch((err) => {
        throw err;
    })
}

async function countArticles(req){
    try{
        let docName = req.params.doc;
        return await countArticleDoc(docName);
    }
    catch(err){
        throw err;
    }
}

exports.serviceArticlesByCategory = (req,res,next) => {
    getArticlesByCategory(req).then(data => {
        res.data = data;
        next();
    }).catch((err) => {
        throw err;
    })
}

async function getArticlesByCategory(req){
    try{
        let docName = req.params.doc;
        return await getArticlesInCategory(docName);
    }
    catch(err){
        throw err;
    }
}


exports.serviceSearch = (req,res,next) => {
    searchCategory(req).then(data => {
        res.data = data;
        next();
    }).catch( err => {
        next(new Error(err));
    });
}

async function searchCategory(req) {
    try{
        let term = req.params.term;
        return await getCategorySearch(term);
    }
    catch(err){
        throw err;
    }
}

exports.collCat = (req,res,next) => {
    getCollCat(req).then(data => {
        res.data = data;
        next();
    }).catch((err) => {
        throw err;
    })
}

async function getCollCat(req){
    try{
        return await getCats();
    }
    catch(err){
        throw err;
    }
}

exports.collArt = (req,res,next) => {
    getCollArt(req).then(data => {
        res.data = data;
        next();
    }).catch((err) => {
        throw err;
    })
}

async function getCollArt(req){
    try{
        return await getArts();
    }
    catch(err){
        throw err;
    }
}