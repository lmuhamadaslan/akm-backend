import AkmTopikModel from "../models/AkmTopikModel.js";

export const getAkmTopik = async (req, res) => {
  try {
    const getData = await AkmTopikModel.find().populate({
      path: "topik_modul_id",
      select: "_id modul_nama",
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const getAKmTopikById = async (req, res) => {
  try {
    const getData = await AkmTopikModel.findById(req.params.id);
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const getAkmTopikByIdModul = async (req, res) => {
  try {
    const getData = await AkmTopikModel.find({
      topik_modul_id: req.params.id,
    }).populate({
      path: "topik_modul_id",
      select: "_id modul_nama",
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const createAkmTopik = async (req, res) => {
  const newAkmTopik = new AkmTopikModel(req.body);
  try {
    const createData = await newAkmTopik.save();
    res.status(201).json(createData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const updateAkmTopik = async (req, res) => {
  try {
    const updateData = await AkmTopikModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

export const deleteAkmTopik = async (req, res) => {
  try {
    await AkmTopikModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Data Berhasil Dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};
