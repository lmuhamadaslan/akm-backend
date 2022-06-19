import AkmSoalModel from "../models/AkmSoalModel.js";

export const getAkmSoal = async (req, res) => {
  try {
    const getData = await AkmSoalModel.find().populate({
      path: "soal_topik_id",
      select: "_id topik_nama",
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const getAkmSoalById = async (req, res) => {
  try {
    const getData = await AkmSoalModel.findById(req.params.id);
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const getAkmSoalByTopik = async (req, res) => {
  try {
    const getData = await AkmSoalModel.find({
      soal_topik_id: req.params.id,
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const createAkmSoal = async (req, res) => {
  const newSoal = new AkmSoalModel(req.body);
  try {
    const createData = await newSoal.save();
    res.status(201).json(createData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const editAkmSoal = async (req, res) => {
  try {
    const editData = await AkmSoalModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(203).json(editData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const deleteAkmSoal = async (req, res) => {
  try {
    const deleteData = await AkmSoalModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};
