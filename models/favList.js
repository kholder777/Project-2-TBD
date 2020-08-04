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
      defaultValue: true,
    },
    catID: {
      type: Sequelize.INTEGER,
      references: {
        model: category,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    userID: {
      type: Sequelize.INTEGER,
      references: {
        model: user,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  });
  return items;
};
