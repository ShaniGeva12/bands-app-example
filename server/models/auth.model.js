module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notEmpty: true
      }
    },
    UserName: {
      type: DataTypes.STRING
    },
    UserPassword: {
      type: DataTypes.STRING
    },
    UserToken: {
      type: DataTypes.STRING
    }
  });

  return Auth;
};
