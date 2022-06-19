import AkmTestSchema from "../models/AkmTestModel.js";

export const getAkmTest = async (req, res, next) => {
  try {
    const tes = await AkmTestSchema.find().populate({
      path: "tes_group_id",
      select: "group_nama",
    });
    res.status(200).json(tes);
  } catch (error) {
    next(error);
  }
};

export const getAkmTestById = async (req, res, next) => {
  try {
    const data = await AkmTestSchema.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const verifyPin = async (req, res, next) => {
  const data = await AkmTestSchema.findOne({
    tes_token: req.body.tes_token,
  }).exec();
  try {
    if (!data) {
      return res.status(400).json({
        message: "Tes Tidak Ditemukan",
      });
    }
    if (Date.now() > data.tes_waktu_selesai) {
      return res.status(400).json({
        message: "Waktu Tes Sudah Habis",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const addAkmTest = async (req, res, next) => {
  const newData = new AkmTestSchema(req.body);
  try {
    const data = await newData.save();
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateAkmTest = async (req, res, next) => {
  try {
    const data = await AkmTestSchema.findByIdAndUpdate(
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

export const deleteAkmTest = async (req, res, next) => {
  try {
    const data = await AkmTestSchema.findByIdAndDelete(req.params.id);
    res.status(202).json(data);
  } catch (error) {
    next(error);
  }
};
