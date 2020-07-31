// change to connect to current/fav list

const router = require("express").Router();
const currentListRoutes = require("./currentList");
const favListRoutes = require("./favList");
// Book routes
router.use("/currentList", currentListRoutes);
router.use("/favList", favListRoutes);
module.exports = router;
