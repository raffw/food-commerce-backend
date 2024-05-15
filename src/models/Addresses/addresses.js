const {DataTypes} = require('sequelize')
const sequelize = require('../../config/config')
const {User} = require('../siteUser/User')

const addresses = sequelize.define('addresses', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: User,
            key: 'id'
        }
    },
    addressLine1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressLine2: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
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
},{
    timestamps: true,
    tableName: 'addresses',
})

addresses.associate() = (models) => {
    addresses.hasMany(models.siteUser.users,{
        foreignKey: 'userId',
        as: 'user'
    });
}

module.exports = addresses;