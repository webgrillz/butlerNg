var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('index', {
		title : "Home | Butler",
	});
});

router.get('/about', function(req, res){
	res.render('about', {
		title : "About | Butler",
	});
});

router.get('/contact', function(req, res){
	res.render('contact', {
		title : "Contact | Butler",
	});
});

router.get('/privacy', function(req, res){
	res.render('privacy', {
		title : "Privacy | Butler",
	});
});

router.get('/services', function(req, res){
	res.render('services', {
		title : "services | Butler",
	});
});

router.get('/faq', function(req, res){
	res.render('faq', {
		title : "FAQ | Butler",
	});
});

router.get('/terms', function(req, res){
	res.render('terms', {
		title : "Terms | Butler",
	});
});

module.exports = router;