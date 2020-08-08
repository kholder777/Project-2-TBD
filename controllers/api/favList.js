const router = require("express").Router();
var db = require("../../models");
// get route -> index

router.get("/fav", function (req, res) {
	// replace old function with sequelize function
	db.items
		.findAll({
			where: {
				fav: true,
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
