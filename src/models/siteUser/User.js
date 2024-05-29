const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/config');
const { v4: UUIDV4 } = require('uuid')

const User = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    profilePic: {
      type: DataTypes.STRING
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
