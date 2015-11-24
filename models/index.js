var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip_planner');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));

var Place = new mongoose.Schema({
	address: {
        type: String,
        required: true
    },
    city: {
    	type: String,
    	required: true
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: [Number],
        required: true
    }
});

var Hotel = new mongoose.Schema({
	name: {
        type: String,
        required: true
    },
    place: {
    	type: [Place]
    },
    num_stars: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    amenities: {
        type: [String],
        get: function(amenities){
        	return amenities.join(",");
        }
    }
});

var Activity = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	place:{
		type: [Place]
	},
	age_range:{
		type: String
	}
});

var Restaurant = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	place:{
		type: [Place]
	},
	cuisines:{
		type: [String],
		get: function(cuisines){
			return cuisines.join(',')
		}
	},
	price: {
		type: Number,
		min: 1,
		max: 5
	}
});

var Place = mongoose.model('Place', Place);
var Hotel = mongoose.model('Hotel', Hotel);
var Activity = mongoose.model('Activity', Activity);
var Restaurant = mongoose.model('Restaurant', Restaurant);

module.exports = {
	Place: Place, 
	Hotel: Hotel, 
	Activity: Activity, 
	Restaurant: Restaurant
};
