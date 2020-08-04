// User model

// The User has a "user" attribute of type DataTypes.String

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define(
		"user",
		{
			user: {
				type: DataTypes.STRING,
				// If a user is to be created, they must have a name
				allowNull: false,
			},
			userID: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
		},
		{ freezeTableName: true }
	);
	User.associate = function (models) {
		// Associating User with items
		User.hasMany(models.items, {
			onDelete: "cascade",
		});
	};
	return User;
};
