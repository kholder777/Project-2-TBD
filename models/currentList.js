//Creating item table.
module.exports = function (sequelize, DataTypes) {
	var items = sequelize.define("Items", {
		items_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		itemID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		shopped: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		fav: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		catID: {
			type: sequelize.INTEGER,
			references: {
				model: Category,
				key: "id",
				deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
			},
		},
		userID: {
			type: sequelize.INTEGER,
			references: {
				model: user,
				key: "id",
				deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE,
			},
		},
	});
	return items;
};
