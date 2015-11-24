var express = require('express');
var router = express.Router();
var Place = models.Page;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;

router.get('/', function(req, res, next){
	Hotel.find({}).exec().then(function(restaurants){
			Activity.find({}).exec().then(function(activities){
				res.render('index', {
					all_hotels: hotels,
					all_restaurants: restaurants,
					all_activities: activities
				})
			}).then(null, console.log());
		}).then(null, console.log());
	}).then(null, console.log());
});

module.exports = router;