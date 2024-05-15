const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const Order = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
      defaultValue: 'pending',
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
    tableName: 'orders',
  }
);

Order.associate = (models) => {
  Order.belongsTo(models.siteUser.User, {
    foreignKey: 'userId',
    as: 'user',
  });
  Order.hasMany(models.OrderItem, {
    foreignKey: 'orderId',
    as: 'orderItems',
  });
  Order.hasMany(models.Payments, {
    foreignKey: 'orderId',
    as: 'payments',
  });
};

module.exports = Order;
