// change to connect to current/fav list

const router = require("express").Router();
const currentListRoutes = require("./currentList");
const favListRoutes = require("./favList");
// const categoriesRoutes = require("./category");
// Book routes
router.use("/currentList", currentListRoutes);
router.use("/favList", favListRoutes);
// router.use("/category", categoriesRoutes);
module.exports = router;
