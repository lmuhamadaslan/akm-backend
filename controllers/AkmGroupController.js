import AkmGroupSchema from "../models/AkmGroupModel.js";

export const getAkmGroup = async (req, res, next) => {
  try {
    const data = await AkmGroupSchema.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAkmGroupById = async (req, res, next) => {
  try {
    const data = await AkmGroupSchema.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const addAkmGroup = async (req, res, next) => {
  const newData = new AkmGroupSchema(req.body);
  try {
    const data = await newData.save();
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateAkmGroup = async (req, res, next) => {
  try {
    const data = await AkmGroupSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(202).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteAkmGroup = async (req, res, next) => {
  try {
    const data = await AkmGroupSchema.findByIdAndDelete(req.params.id);
    res.status(203).json(data);
  } catch (error) {
    next(error);
  }
};
