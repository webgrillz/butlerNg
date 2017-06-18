var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.redirect('/admin/dashboard');
});

router.get('/dashboard', function(req, res){
	res.render('admin/dashboard', {
		title : "Admin Dashboard | Butler",
	});
});

router.get('/signup', function(req, res){
	res.render('admin/signup', {
		title : "Sign Up | Butler",
	});
});

router.post('/signup', function(req, res){
	res.end('admin signup post request');
});

router.get('/signin', function(req, res){
	res.render('admin/signin', {
		title : "Sign In | Butler",
	});
});

router.post('/signin', function(req, res){
	res.end('admin signin post request');
});

router.get('/users', function(req, res){
	res.render('admin/users', {
		title : "Users | Butler",
	});
});

router.get('/partners', function(req, res){
	res.render('admin/partners', {
		title : "Partners | Butler",
	});
});

router.get('/orders', function(req, res){
	res.render('admin/orders', {
		title : "Orders | Butler",
	});
});

function isLoggedIn(req, res, next){
	if(false){
		redirec('/users/signin');
	}else next();
}

function notLoggedIn(req, res, next){
	if(false){
		redirec('/users/signin');
	}else next();
}

module.exports = router;