const router = require("express").Router();
var db = require("../../models");

// get route, edited to match sequelize
router.get("/active", function (req, res) {
	// replace old function with sequelize function
	db.items
		.findAll({
			where: {
				active: 1,
			},
		})
		// use promise method to pass the userlist...
		.then(function (dbitems) {
			// into the main index, updating the page
			console.log(dbitems);
			var dbitems = {
				items: dbitems,
			};
			return res.json(dbitems);
		});
});

router.get("/inactive", function (req, res) {
	// replace old function with sequelize function
	db.items
		.findAll({
			where: {
				active: 0,
			},
		})
		// use promise method to pass the userlist...
		.then(function (dbitems) {
			// into the main index, updating the page
			console.log(dbitems);
			var dbitems = {
				items: dbitems,
			};
			return res.json(dbitems);
		});
});

router.get("/all", function (req, res) {
	// replace old function with sequelize function
	db.items
		.findAll({})
		// use promise method to pass the userlist...
		.then(function (dbitems) {
			// into the main index, updating the page
			console.log(dbitems);
			var dbitems = {
				items: dbitems,
			};
			return res.json(dbitems);
		});
});

router.get("/fav", function (req, res) {
	// replace old function with sequelize function
	db.items
		.findAll({
			where: {
				fav: 1,
			},
		})
		// use promise method to pass the userlist...
		.then(function (dbitems) {
			// into the main index, updating the page
			console.log(dbitems);
			var dbitems = {
				items: dbitems,
			};
			return res.json(dbitems);
		});
});

module.exports = router;
