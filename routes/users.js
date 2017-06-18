
module.exports = function(app, passport) {

   // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }


    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res){
        res.render('index', {
            title : "Home | Butler",
        });
    });


    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/users/signin', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signin.ejs', { 
			title : "Sign In | Butler",
			message: req.flash('loginMessage') 
		}); 
    });

    // process the login form
    app.post('/users/signin', passport.authenticate('local-login', {
        successRedirect : '/users/profile', // redirect to the secure profile section
        failureRedirect : '/users/signin', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // show the signup form
    app.get('/users/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { 
            title : "Sign Up | Butler",
            message: req.flash('signupMessage') 
        });
    });

    // process the signup form
    app.post('/users/signup', passport.authenticate('local-signup', {
        successRedirect : '/users/profile', // redirect to the secure profile section
        failureRedirect : '/users/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/users/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
			title : "User Profile | Butler",
            user : req.user // get the user out of session and pass to template
        });
    });


	app.get('/users/book', function(req, res){
		res.render('booking', {
			title : "Book Service | Butler",
		});
    });

	app.post('/users/book', function(req, res){
		res.end('booking post request');
	});

	app.get('/users/book/:service', function(req, res){
		var service = req.params.service;
		res.end(service);
	});

	app.post('/users/book/:service', function(req, res){
		var service = req.params.service;
		res.end('booking post request');
	});
     // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/users/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

