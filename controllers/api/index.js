// change to connect to current/fav list

const router = require("express").Router();
const currentListRoutes = require("./currentList");
const favListRoutes = require("./favList");
const categoriesRoutes = require("./categories");
// Book routes
router.use("/currentList", currentListRoutes);
router.use("/favList", favListRoutes);
router.use("/categories", categoriesRoutes);
module.exports = router;
