var mongoose = require('mongoose');
var marked = require('marked');
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
    	type: [mongoose.Schema.Types.ObjectId],
    	ref: 'Place'
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
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Place'
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
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Place'
	},
	cuisines:{
		type: [String],
		get: function(cuisines){
			return cuisines.join(',')
		}
	},
	price{
		type: Number,
		min: 1,
		max: 5
	}
});













