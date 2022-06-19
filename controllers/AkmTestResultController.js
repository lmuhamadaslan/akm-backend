import AkmTesResultModel from "../models/AkmTesResultModel.js";

export const getAkmTesResult = async (req, res, next) => {
  try {
    const data = await AkmTesResultModel.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAkmTesResultById = async (req, res, next) => {
  try {
    const data = AkmTesResultModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const addAkmTesResult = async (req, res, next) => {
  const newData = new AkmTesResultModel(req.body);
  try {
    const data = await newData.save();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateAkmTesResult = async (req, res, next) => {
  try {
    const data = await AkmTesResultModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteAkmTesResult = async (req, res, next) => {
  try {
    const data = await AkmTesResultModel.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
