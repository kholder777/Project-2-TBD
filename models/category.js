//creating category table.

module.exports = function (sequelize, DataTypes) {
	var category = sequelize.define("category", {
		category_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		catID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	});

	category.associate = function (models) {
		// Associating Category with items
		category.hasMany(models.items, {
			onDelete: "cascade",
		});
	};

	return category;
};
