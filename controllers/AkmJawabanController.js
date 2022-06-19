import AkmJawabanSchema from "../models/AkmJawabanModel.js";

export const getAkmJawaban = async (req, res, next) => {
  try {
    const data = await AkmJawabanSchema.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAkmJawabanById = async (req, res, next) => {
  try {
    const data = await AkmJawabanSchema.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAkmJawabanBySoalId = async (req, res, next) => {
  try {
    const data = await AkmJawabanSchema.find({
      jawaban_soal_id: req.params.id,
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const addAkmJawaban = async (req, res, next) => {
  const newData = new AkmJawabanSchema(req.body);
  try {
    const data = await newData.save();
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateAkmJawaban = async (req, res, next) => {
  try {
    const data = await AkmJawabanSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(202).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteAkmJawaban = async (req, res, next) => {
  try {
    const data = await AkmJawabanSchema.findByIdAndDelete(req.params.id);
    res.status(203).json(data);
  } catch (error) {
    next(error);
  }
};
