import AkmUserModel from "../models/AkmUserModel.js";

export const getAkmUser = async (req, res, next) => {
  try {
    const data = await AkmUserModel.find().populate({
      path: "user_group_id",
      select: "group_nama",
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAkmUserById = async (req, res, next) => {
  try {
    const data = await AkmUserModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAkmUserByGroupId = async (req, res, next) => {
  try {
    const data = await AkmUserModel.find({
      user_group_id: req.params.id,
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const addAkmUser = async (req, res, next) => {
  const newUser = new AkmUserModel(req.body);
  try {
    const data = await newUser.save();
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateAkmUser = async (req, res, next) => {
  try {
    const data = await AkmUserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(202).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteAkmUser = async (req, res, next) => {
  try {
    const data = await AkmUserModel.findByIdAndDelete(req.params.id);
    res.status(203).json(data);
  } catch (error) {
    next(error);
  }
};
