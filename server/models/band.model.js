module.exports = (sequelize, DataTypes) => {
  const Band = sequelize.define("band", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notEmpty: true
      }
    },
    BandName: {
      type: DataTypes.STRING
    },
    BandOrigin: {
      type: DataTypes.STRING
    },
    BandYears: {
      type: DataTypes.STRING
    },
    BandWebsite: {
      type: DataTypes.STRING
    },
    BandDisbandingYear: {
      type: DataTypes.STRING
    }
  });

  return Band;
};
