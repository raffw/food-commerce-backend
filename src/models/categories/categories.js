const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/config');

const categories = sequelize.define('catehories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
  tableName: 'categories',
});

categories.associate = (models) => {
  categories.hasMany(models.foods, {
    foreignKey: 'categoryId',
    as: 'foods',
  });
};

module.exports = categories;
