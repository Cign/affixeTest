var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const path = require('path')
var bodyParser = require('body-parser');
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyC80sx6xNesJJXpHP82qfaygULgjEqYwis",
//     authDomain: "afix-988b2.firebaseapp.com",
//     databaseURL: "https://afix-988b2.firebaseio.com",
//     projectId: "afix-988b2",
//     storageBucket: "afix-988b2.appspot.com",
//     messagingSenderId: "886858316770",
//     appId: "1:886858316770:web:1b6ff4bb1840ff8d4b57bb",
//     measurementId: "G-V734SXRH5Y"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>


// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://afix-988b2.firebaseio.com"
// });


var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/categories');
var articlesRouter = require('./routes/articles');
var searchRouter = require('./routes/search');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../client/dist'))) 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Defining api roots
 */
app.use('/', indexRouter);
app.use('/api/search', searchRouter);
app.use('/api/cats', categoriesRouter);
app.use('/api/articles', articlesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
