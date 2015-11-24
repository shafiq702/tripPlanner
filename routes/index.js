var express = require('express');
var router = express.Router();

<<<<<<< HEAD
router.get('/', function(req, res, next, err){
  res.render('layout');
});
=======
router.get('/', function(req, res){
	res.render('layout');
})
>>>>>>> 0169d28890150e8328eca0095054e91906466ad8

module.exports = router;