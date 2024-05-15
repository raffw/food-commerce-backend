const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');
const {Order} = require('../order/orders');
const Addresses = require('../Addresses/addresses');
const Cart = require('../carts/carts');

const User = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
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
  },
  {
    timestamps: true,
    tableName: 'users',
  }
);

User.associate = (models) => {
  User.hasMany(models.Order, {
    foreignKey: 'userId',
    as: 'orders',
  });
  User.hasMany(models.Addresses, {
    foreignKey: 'userId',
    as: 'addresses',
  });
  User.hasOne(models.Cart, {
    foreignKey: 'userId',
    as: 'cart',
  });
};

module.exports = User;
