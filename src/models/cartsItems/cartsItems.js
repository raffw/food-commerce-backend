const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config/config')
const { Carts } = require('../carts/carts')
const { foods } = require('../foods/foods')

const cartItems = sequelize.define('cartItems', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Carts,
            key: 'id'
        }
    },
    foodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: foods,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    tableName: 'cartItems'
})

cartItems.associate = (models) => {
    cartItems.belongsTo(models.carts, {
        foreignKey: 'cartId',
        as: 'cart'
    });
    cartItems.belongsTo(models.foods, {
        foreignKey: 'foodId',
        as: 'food'
    })
}

module.exports = cartItems;