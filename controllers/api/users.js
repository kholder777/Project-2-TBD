const router = require("express").Router();
var db = require("../../models");

router.get("/all", function (req, res) {
	// replace old function with sequelize function
	db.User.findAll({})
		// use promise method to pass the userlist...
		.then(function (dbusers) {
			// into the main index, updating the page

			var dbusers = {
				users: dbusers,
			};
			return res.json(dbusers);
		});
});

module.exports = router;
