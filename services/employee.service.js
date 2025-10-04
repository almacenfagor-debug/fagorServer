const employeeModel = require("../models/employee.model");
const supplyDeliveryModel = require("../models/supply.delivery.model");

class employeeServices {
  static async getAll() {
    try {
      const getemployees = await employeeModel.findAll();
      return getemployees;
    } catch (error) {
      throw error;
    }
  }

  static async getOne(id) {
    try {
      const getemployees = await employeeModel.findByPk(id //, {
       /*include: { model: supplyDeliveryModel, attributes: ["user_id"] },
      }*/);
      return getemployees;
    } catch (error) {
      throw error;
    }
  }

  static async createOne(newemployee) {
    try {
      const employeeCreated = await employeeModel.create(newemployee);
      return employeeCreated;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    try {
      const employeeDelete = await employeeModel.destroy({ where: { employeeId: id } });
      return employeeDelete;
    } catch (error) {
      throw error;
    }
  }

  static async updateOne(id, employeeToUpdate) {
    try {
      const employeeUpdated = await employeeModel.update(employeeToUpdate, {
        where: { employeeId: id },
      });
      return employeeUpdated;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = employeeServices;



