import AkmJawabanPilgan from "../models/AkmJawabanPilgan.js";
import AkmJawabanEssay from "../models/AkmJawabanEssay.js";

// bagian AkmJawanPilgan
export const getAkmJawabanPilgan = async (req, res, next) => {
  try {
    const data = await AkmJawabanPilgan.find().populate({
      path: "result_soal_pilihan",
      select: "soal_tipe soal_detail soal_bobot ",
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAkmJawabanPilganById = async (req, res, next) => {
  try {
    const data = await AkmJawabanPilgan.findById(req.params.id).populate({
      path: "result_soal_pilihan",
      select: "soal_tipe soal_detail soal_bobot ",
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const addAkmJawabanPilgan = async (req, res, next) => {
  const newData = new AkmJawabanPilgan(req.body);
  try {
    const data = await newData.save();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateAkmJawabanPilgan = async (req, res, next) => {
  try {
    const data = await AkmJawabanPilgan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteAkmJawabanPilgan = async (req, res, next) => {
  try {
    const data = await AkmJawabanPilgan.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// bagian AkmJawanEssay
export const getAkmJawabanEssay = async (req, res, next) => {
  try {
    const data = await AkmJawabanEssay.find().populate({
      path: "result_soal_essay",
      select: "soal_tipe soal_detail soal_bobot ",
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAkmJawabanEssayById = async (req, res, next) => {
  try {
    const data = await AkmJawabanEssay.findById(req.params.id).populate({
      path: "result_soal_essay",
      select: "soal_tipe soal_detail soal_bobot ",
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const addAkmJawabanEssay = async (req, res, next) => {
  const newData = new AkmJawabanEssay(req.body);
  try {
    const data = await newData.save();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateAkmJawabanEssay = async (req, res, next) => {
  try {
    const data = await AkmJawabanEssay.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteAkmJawabanEssay = async (req, res, next) => {
  try {
    const data = await AkmJawabanEssay.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
