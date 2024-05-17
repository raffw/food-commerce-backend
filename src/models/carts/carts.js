const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');
const {User} = require('../siteUser/User')

const Carts = sequelize.define('carts', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncremen: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
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

},{
    timestamps: true,
    tableName: 'carts'
})

Carts.associate = (models) => {
    Carts.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'users',
    });
    Carts.belongsTo(models.cartsItems, {
        foreignKey: 'cartId',
        as: 'cart'
    })
}

module.exports= Carts ;