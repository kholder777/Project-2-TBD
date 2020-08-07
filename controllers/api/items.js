const router = require("express").Router();
var db = require("../../models");

// get route, edited to match sequelize
router.get("/items", function (req, res) {
	// replace old function with sequelize function
	db.User.findAll({})
		// use promise method to pass the userlist...
		.then(function (dbuser) {
			// into the main index, updating the page
			console.log(dbuser);
			var dbuser = {
				user: dbuser,
			};
			return res.json(dbuser);
		});
});

module.exports = router;
