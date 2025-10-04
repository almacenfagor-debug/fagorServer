const supplyServices = require("../services/supply.service");

const getAllSupplysController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getsupplys = await supplyServices.getAll();
    res.json(getsupplys);
  } catch (error) {
    next(error);
  }
};

const getSupplyController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getsupplys = await supplyServices.getOne(id);
    res.json(getsupplys);
  } catch (error) {
    next(error);
  }
};

const createSupplyController = async (req, res, next) => {
  try {
    const newsupply = req.body;
    const supplyCreated = await supplyServices.createOne(newsupply);
    res.status(201).send(supplyCreated);
  } catch (error) {
    next(error);
  }
};

const deleteSupplyController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const supplyDelete = await supplyServices.deleteOne(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const updateSupplyController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const supplyToUpdate = req.body;
    const supplyUpdated = await supplyServices.updateOne(id, supplyToUpdate);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSupplyController,
  getAllSupplysController,
  createSupplyController,
  deleteSupplyController,
  updateSupplyController,
};



