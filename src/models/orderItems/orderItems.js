const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/config');
const { Order } = require('../order/orders')

const OrderItem = sequelize.define('OrderItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'id',
    },
  },
  foodId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'foods',
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
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
  tableName: 'order_items',
});

OrderItem.associate = (models) => {
  OrderItem.belongsTo(models.orders, {
    foreignKey: 'orderId',
    as: 'order',
  });
  OrderItem.belongsTo(models.foods, {
    foreignKey: 'foodId',
    as: 'foods',
  });
};

module.exports = OrderItem;
