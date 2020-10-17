var admin = require('firebase-admin');
const serviceAccount = require('./afix-988b2-firebase-adminsdk-iamqb-f5af05b2b5.json')
//const functions = require('firebase-functions');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
var db = admin.firestore();
const { collectionCategories, collectionArticles } = require('./config');

exports.getCategoryDoc = docName => getCategoryStoreDoc(docName);

async function getCategoryStoreDoc(docName) {
    try {
        let res = { id: docName };
        let snap = await db.collection(collectionCategories).get();
        snap.forEach(doc => {
            if (doc.id == docName) {
                res.data = doc.data();
            }
        });
        return res;
    } catch (err) {
        throw err;
    }
}

exports.getArticleDoc = docName => getArticleStoreDoc(docName);

async function getArticleStoreDoc(docName) {
    try {
        let res = { id: docName };
        let snap = await db.collection(collectionArticles).get();
        snap.forEach(doc => {
            if (doc.id == docName) {
                res.data = doc.data();
            }
        });
        return res;
    } catch (err) {
        throw err;
    }
}

exports.countArticleDoc = docName => countArticleStoreDoc(docName);

async function countArticleStoreDoc(docName) {
    let snap = await db.collection(collectionArticles).where('category', '==', docName).get();
    let arts = [];
    snap.docs.map(doc => arts.push({
        id: doc.id,
        data: doc.data()
    }));//  => doc.data);
    return arts;
}

exports.getArticlesInCategory = docName => getArticlesByCat(docName);
async function getArticlesByCat(docName) {
    let snap = await db.collection(collectionArticles).where('category', '==', docName).get();
    let size = snap.size // return the collection size
    return size;
}

exports.getCats = () => getStoreCats(collectionCategories);

async function getStoreCats(collectionCategories) {
    try {
        let snap = await db.collection(collectionCategories).get();
        let cats = [];
        snap.docs.map(doc => cats.push({
            id: doc.id,
            data: doc.data()
        }));//  => doc.data);
        return cats;
    } catch (err) {
        throw err;
    }
}

exports.getCategorySearch = term => getCategoriesTerm(term);

async function getCategoriesTerm(term) {
    try {
        let snap = await db.collection(collectionCategories).get();
        let cats = [];
        snap.docs.map(doc => {
            console.log('data()()(title):: ',doc.data().title)
             if(((doc.data()).title).includes(term))
             {cats.push({
                 id: doc.id,
                 data: doc.data()
             })}
        });//  => doc.data);
        return cats;
    } catch (err) {
        throw err;
    }
}

exports.getArts = () => getStoreArts(collectionArticles);

async function getStoreArts(collectionArticles) {
    try {
        let snap = await db.collection(collectionArticles).get();
        let arts = [];
        snap.docs.map(doc => arts.push({
            id: doc.id,
            data: doc.data()
        }));//  => doc.data);
        return arts;
    } catch (err) {
        throw err;
    }
}