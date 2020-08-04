//creating category table.

module.exports = function (sequelize, DataTypes) {
	var Category = sequelize.define("Category", {
		Category_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		catID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	});
	return Category;
};
