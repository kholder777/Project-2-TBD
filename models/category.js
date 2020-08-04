//creating category table.

module.exports = function (sequelize, DataTypes) {
	var Category = sequelize.define(
		"Category",
		{
			category_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			catID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
		},
		{ freezeTableName: true }
	);

	Category.associate = function (models) {
		// Associating Category with items
		Category.hasMany(models.items, {
			onDelete: "cascade",
		});
	};

	return Category;
};
