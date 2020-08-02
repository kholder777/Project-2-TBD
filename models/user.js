// User model

// The User has a "user" attribute of type DataTypes.String

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("user", {
    user: {
      type: DataTypes.STRING,
      // If a user is to be created, they must have a name
      allowNull: false,
    },
  });
  return User;
};
