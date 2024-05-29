const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/config');
const { categories } = require('../categories/categories')

const foods = sequelize.define('foods', {
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
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: categories,
      key: 'id',
    },
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
  tableName: 'foods',
});

foods.associate = (models) => {
  foods.belongsTo(models.categories, {
    foreignKey: 'categoryId',
    as: 'category',
  });
  foods.belongsToMany(models.orders, {
    through: 'OrderItems',
    foreignKey: 'foodId',
    as: 'orders',
  });
  foods.belongsToMany(models.Cart, {
    through: 'CartItems',
    foreignKey: 'foodId',
    as: 'carts',
  });
};

module.exports = foods;
