import UserModel from "../models/UserModel.js";

export const getUsers = async (req, res, next) => {
  try {
    const data = await UserModel.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const data = await UserModel.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const data = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const data = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
