// change to connect to current/fav list

const router = require("express").Router();
const currentListRoutes = require("./currentList");
const userRoutes = require("./items");
// Book routes
router.use("/currentList", currentListRoutes);
router.use("/items", userRoutes);
module.exports = router;
