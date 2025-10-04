const ppeServices = require("../services/ppe.service");

const getAllPpesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getPpes = await ppeServices.getAll();
    res.json(getPpes);
  } catch (error) {
    next(error);
  }
};

const getPpeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getPpes = await ppeServices.getOne(id);
    res.json(getPpes);
  } catch (error) {
    next(error);
  }
};

const createPpeController = async (req, res, next) => {
  try {
    const newPpe = req.body;
    const PpeCreated = await ppeServices.createOne(newPpe);
    res.status(201).send(PpeCreated);
  } catch (error) {
    next(error);
  }
};

const deletePpeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const PpeDelete = await ppeServices.deleteOne(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const updatePpeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const PpeToUpdate = req.body;
    const PpeUpdated = await ppeServices.updateOne(id, PpeToUpdate);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPpeController,
  getAllPpesController,
  createPpeController,
  deletePpeController,
  updatePpeController,
};
