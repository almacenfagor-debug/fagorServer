const supplyModel = require("../models/supply.model");
const supplyDeliveryModel = require("../models/supply.delivery.model");

class supplyServices {
  static async getAll() {
    try {
      const getsupplys = await supplyModel.findAll();
      return getsupplys;
    } catch (error) {
      throw error;
    }
  }

  static async getOne(id) {
    try {
      const getsupplys = await supplyModel.findByPk(id, /*{
        include: { model: supplyDeliveryModel, attributes: ["user_id"] },
      }*/);
      return getsupplys;
    } catch (error) {
      throw error;
    }
  }

  static async createOne(newsupply) {
    try {
      const supplyCreated = await supplyModel.create(newsupply);
      return supplyCreated;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    try {
      const supplyDelete = await supplyModel.destroy({ where: { supplyId: id } });
      return supplyDelete;
    } catch (error) {
      throw error;
    }
  }

  static async updateOne(id, supplyToUpdate) {
    try {
      const supplyUpdated = await supplyModel.update(supplyToUpdate, {
        where: { supplyId: id },
      });
      return supplyUpdated;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = supplyServices;