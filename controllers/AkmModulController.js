import AkmModulModel from "../models/AkmModulModel.js";

export const getAkmModul = async (req, res) => {
  try {
    const getData = await AkmModulModel.find();
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
};

export const getAkmModulById = async (req, res) => {
  try {
    const getData = await AkmModulModel.findById(req.params.id);
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
};

export const createAkmModul = async (req, res) => {
  const newAkmModul = new AkmModulModel(req.body);
  try {
    const createData = await newAkmModul.save();
    res.status(201).json(createData);
  } catch (error) {
    res.status(400).json({ msg: error.msg });
  }
};
