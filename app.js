//Include dependencies
 var express = require('express');
 var path = require('path');
 var mongoose = require('mongoose');
 var passport = require('passport');
 var flash    = require('connect-flash');

 var morgan       = require('morgan');
 var cookieParser = require('cookie-parser');
 var bodyParser   = require('body-parser');
 var session      = require('express-session');

var	config = require('./config/config');
var	routesHandler = require('./routes/main');

var	adminHandler = require('./routes/admin');
var	partnersHandler = require('./routes/partners');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

//instantiating express
var app = express();

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
 app.use(morgan('dev')); // log every request to the console
 app.use(cookieParser()); // read cookies (needed for auth)
 app.use(bodyParser()); // get information from html forms

 //View engine configuration
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');

 //Mounting express middlewere
 app.use(express.static(path.join(__dirname, 'public')));

// // required for passport
 app.use(session({ 
	secret: 'ilovesbutlerioservices' ,
	 resave: true,
    saveUninitialized: true
})); // session secret
 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions
 app.use(flash()); // use connect-flash for flash messages stored in session

//Routes and routes handlers
//app.use('/admin', adminHandler);
//app.use('/partners', partnersHandler);
//app.use('/', routesHandler);
require('./routes/users')(app, passport);


//Starting server and listening on the server port or 3000 on a local environment.
app.listen(config.PORT, function() {
  	console.log(
  		'Express server listening on port ' + config.PORT
  	);
});