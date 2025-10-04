const { DataTypes } = require('sequelize')
const db = require('../utils/db')
const bcrypt = require('bcrypt')

const AuthorizationRequest = db.define('authorization_request', {
  requestId: {
    type: DataTypes.INTEGER,
    
    primaryKey: true,
    autoIncrement: true,
    field: 'request_id'
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'employee_id'
  },
  documentId: {
    type: DataTypes.INTEGER(),
    unique: true,
    allowNull: false,
    field: 'document_id'
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
    
  },
  statusId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
    field: 'status_id'
  },

  
  role: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: db.literal('CURRENT_TIMESTAMP'),
    field: 'created_at'
  }
}, {
  tableName: 'authorization_request',
  timestamps: false, hooks:{

    beforeCreate: async(user)=>{

        const salt = await bcrypt.genSalt(10)
        const pass = await bcrypt.hash(user.password, salt)
        user.password = pass
    }

}
})

module.exports = AuthorizationRequest
