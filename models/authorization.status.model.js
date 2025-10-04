const { DataTypes } = require('sequelize')
const db = require('../utils/db')

const AuthorizationStatus = db.define('authorization_status', {
  statusId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
        autoIncrement: true,
    field: 'status_id'
  },
  statusName: {
    type: DataTypes.STRING(25),
    allowNull: false,
    unique: true,
    field: 'status_name'
  }
}, {
  tableName: 'authorization_status',
  timestamps: false
})

module.exports = AuthorizationStatus
